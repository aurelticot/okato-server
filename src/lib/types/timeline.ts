import { DateTime } from "luxon";
import { MarketStatus } from "./market";

export interface TimelineSegment {
  startDate: DateTime;
  start: number;
  duration: number;
  status: MarketStatus;
}
