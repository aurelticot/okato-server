import { DateTime } from "luxon";
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

export const buildTimeline = (
  timelineStart: DateTime,
  timelineEnd: DateTime,
  sessions: ResolvedSession[]
): TimelineSegment[] => {
  const segments: TimelineSegment[] = sessions
    .filter(
      (session) => !(session.end < timelineStart || session.start > timelineEnd)
    )
    .map((session) => {
      const { start, end, status } = session;
      let sessionStart = start;
      let sessionEnd = end;
      if (sessionStart < timelineStart) {
        sessionStart = timelineStart;
      }
      if (sessionEnd > timelineEnd) {
        sessionEnd = timelineEnd;
      }
      return {
        startDate: start,
        start: sessionStart.diff(timelineStart).as("minutes"),
        duration: sessionEnd.diff(sessionStart).as("minutes"),
        status,
      };
    });

  return cleanTimelineSegments(segments);
};
