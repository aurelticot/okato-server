import { DateTime } from "luxon";
import { Effectivity } from "./common";

export interface Market {
  id: string;
  mic: string;
  shortName: string;
  name: string;
  currency: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  capitalisation: number;
  website: string;
}

export interface ResolvedSession {
  start: DateTime;
  end: DateTime;
  status: MarketStatus;
  reason?: string;
}

export interface MarketSessionDetail {
  localStartTime: string;
  localEndTime: string;
  status: MarketStatus;
}

export interface MarketDefaultSession extends MarketSessionDetail {
  market: string;
  weekday: number;
  effectivity: Effectivity;
}

export interface MarketSpecialDay {
  reason: string;
  market: string;
  localDate: string;
  sessions: MarketSessionDetail[];
}

export enum MarketStatus {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
  CLOSE_SPECIAL = "CLOSE_SPECIAL",
  BREAK = "BREAK",
  BEFORE_MARKET = "BEFORE_MARKET",
  AFTER_MARKET = "AFTER_MARKET",
}

export enum MarketSort {
  ALPHABETICALLY = "ALPHABETICALLY",
  ALPHABETICALLY_REVERSE = "ALPHABETICALLY_REVERSE",
  CAPITALISATION = "CAPITALISATION",
  CAPITALISATION_REVERSE = "CAPITALISATION_REVERSE",
  CHRONOLOGICALLY = "CHRONOLOGICALLY",
  CHRONOLOGICALLY_REVERSE = "CHRONOLOGICALLY_REVERSE",
}
