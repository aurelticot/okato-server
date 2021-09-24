import { DateTime } from "luxon";
import { getMarketMainStatus } from ".";
import { MarketStatus, ResolvedSession, TimelineSegment } from "../types";

const cleanTimelineSegments = (
  segments: TimelineSegment[]
): TimelineSegment[] => {
  const getNextSegmentDuration = (
    status: MarketStatus,
    array: TimelineSegment[],
    nextIndex: number
  ): number => {
    if (nextIndex >= array.length) {
      return 0;
    }
    const nextSegment = array[nextIndex];
    if (nextSegment.status !== status) {
      return 0;
    }
    return (
      nextSegment.duration +
      getNextSegmentDuration(status, array, nextIndex + 1)
    );
  };

  const returnedSegments: TimelineSegment[] = [...segments]
    .sort((a, b) => {
      return a.start - b.start;
    })
    .map((segment, index, array) => {
      let duration = segment.duration;

      duration += getNextSegmentDuration(segment.status, array, index + 1);

      const previousIndex = index - 1;
      if (previousIndex >= 0) {
        const previousSegment = array[previousIndex];
        if (segment.status === previousSegment.status) {
          duration = 0;
        }
      }

      return { ...segment, duration };
    })
    .filter((segment: TimelineSegment) => segment.duration !== 0);

  return returnedSegments;
};

const fillGapTimelineSegments = (
  segments: TimelineSegment[],
  timelineSize: number
): TimelineSegment[] => {
  const size = segments.length;
  const completedSegments: TimelineSegment[] = [];

  segments
    .sort((a, b) => {
      return a.start - b.start;
    })
    .map((segment, index, array) => {
      const { startDate, start, duration } = segment;
      const end = start + duration;
      if (index === 0 && start !== 0) {
        completedSegments.push({
          startDate: startDate.minus({ days: 1 }),
          start: 0,
          duration: start,
          status: MarketStatus.CLOSE,
        });
      }

      const nextIndex = index + 1;
      if (nextIndex < size) {
        const nextSegment = array[nextIndex];
        if (end !== nextSegment.start) {
          completedSegments.push({
            startDate: nextSegment.startDate,
            start: end,
            duration: nextSegment.start - end,
            status: MarketStatus.CLOSE,
          });
        }
      } else if (end !== timelineSize) {
        completedSegments.push({
          startDate: startDate.plus({ days: 1 }),
          start: end,
          duration: timelineSize - end,
          status: MarketStatus.CLOSE,
        });
      }

      completedSegments.push(segment);
    });

  return completedSegments.sort((a, b) => {
    return a.start - b.start;
  });
};

export const buildTimeline = (
  timelineStart: DateTime,
  timelineEnd: DateTime,
  sessions: ResolvedSession[]
): TimelineSegment[] => {
  const timelineSize = timelineEnd.diff(timelineStart).as("minutes");
  const segments: TimelineSegment[] = sessions
    .filter((session) => {
      const { start: sessionStartTime, end: sessionEndTime } = session;
      return !(
        sessionEndTime < timelineStart || sessionStartTime > timelineEnd
      );
    })
    .map((session) => {
      const { start, end, status } = session;
      let sessionStartTime = start;
      let sessionEndTime = end;
      if (sessionStartTime < timelineStart) {
        sessionStartTime = timelineStart;
      }
      if (sessionEndTime > timelineEnd) {
        sessionEndTime = timelineEnd;
      }
      return {
        startDate: start,
        start: sessionStartTime.diff(timelineStart).as("minutes"),
        duration: sessionEndTime.diff(sessionStartTime).as("minutes"),
        status:
          status === MarketStatus.CLOSE_SPECIAL
            ? status
            : getMarketMainStatus(status),
      };
    });

  const completedSegments = fillGapTimelineSegments(segments, timelineSize);
  return cleanTimelineSegments(completedSegments);
};
