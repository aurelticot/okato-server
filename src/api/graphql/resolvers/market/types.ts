import { Market, MarketSort, MarketStatus } from "../../../../lib/types";

export interface MarketVariables {
  id: string;
}

export interface MarketsVariables {
  sort: MarketSort;
  limit: number;
  page: number;
  selection: string[];
}

export interface MarketsData {
  total: number;
  result: Market[];
}

export interface MarketSessionsVariables {
  startDate: string;
  endDate: string;
}

export interface MarketSessionData {
  start: string;
  end: string;
  mainStatus: MarketStatus;
  status: MarketStatus;
  reason?: string;
}

export interface MarketTimelineVariables {
  startDate: string;
  endDate: string;
}

export interface TimelineSegmentData {
  startDate: string;
  start: number;
  duration: number;
  mainStatus: MarketStatus;
  status: MarketStatus;
}
