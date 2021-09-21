import { DateTime } from "luxon";
import {
  MarketDefaultSession,
  MarketSpecialDay,
  MarketStatus,
  ResolvedSession,
} from "../types";

export const buildSessionsForDates = (
  start: DateTime,
  end: DateTime,
  marketTimezone: string,
  defaultSessions: MarketDefaultSession[],
  specialDays: MarketSpecialDay[]
): ResolvedSession[] => {
  let resolvedSessions: ResolvedSession[] = [];

  let dateCursor = start;

  // eslint-disable-next-line no-loops/no-loops
  while (!dateCursor.hasSame(end.plus({ day: 1 }), "day")) {
    const weekday = dateCursor.weekday;
    const formattedDay = dateCursor.toISODate();

    const specialDay = specialDays.filter(
      (specialDay: MarketSpecialDay) => specialDay.localDate === formattedDay
    );

    // TODO Try to find a cleaner way of the following
    if (specialDay.length > 0) {
      const daySessions: ResolvedSession[] = specialDay[0].sessions.map(
        (session) => ({
          start: DateTime.fromISO(
            `${specialDay[0].localDate}T${session.localStartTime}`,
            {
              zone: marketTimezone,
            }
          ),
          end: DateTime.fromISO(
            `${specialDay[0].localDate}T${session.localEndTime}`,
            {
              zone: marketTimezone,
            }
          ),
          status: session.status,
          reason: specialDay[0].reason,
        })
      );
      resolvedSessions = [...resolvedSessions, ...daySessions];
    } else {
      const daySessions: ResolvedSession[] = defaultSessions
        .filter((session) => session.weekday === weekday)
        .map((session) => ({
          start: DateTime.fromISO(`${formattedDay}T${session.localStartTime}`, {
            zone: marketTimezone,
          }),
          end: DateTime.fromISO(`${formattedDay}T${session.localEndTime}`, {
            zone: marketTimezone,
          }),
          status: session.status,
        }));
      resolvedSessions = [...resolvedSessions, ...daySessions];
    }

    dateCursor = dateCursor.plus({ days: 1 });
  }

  return fillBlankWithClosedSessions(resolvedSessions, start, end);
};

export const fillBlankWithClosedSessions = (
  sessions: ResolvedSession[],
  startDate: DateTime,
  endDate: DateTime
): ResolvedSession[] => {
  const completeSessions: ResolvedSession[] = [];
  const size = sessions.length;

  sessions
    .sort((sessionA, sessionB) => {
      return sessionA.start.toMillis() - sessionB.start.toMillis();
    })
    .map((session, index, array) => {
      const { start: sessionStart, end: sessionEnd } = session;

      if (index === 0 && sessionStart > startDate) {
        completeSessions.push({
          start: startDate,
          end: sessionStart,
          status: MarketStatus.CLOSE,
        });
      }
      completeSessions.push(session);

      const nextIndex = index + 1;
      if (nextIndex < size) {
        const { start: nextSessionStart } = array[nextIndex];
        if (sessionEnd < nextSessionStart.minus({ seconds: 1 })) {
          completeSessions.push({
            start: sessionEnd.startOf("minute"),
            end: nextSessionStart.startOf("minute"),
            status: MarketStatus.CLOSE,
          });
        }
      } else if (sessionEnd < endDate) {
        completeSessions.push({
          start: sessionEnd,
          end: endDate,
          status: MarketStatus.CLOSE,
        });
      }

      return session;
    });
  return completeSessions;
};
