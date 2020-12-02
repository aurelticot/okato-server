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

export interface MarketSession extends MarketSessionDetail {
  weekday: number;
}

export interface MarketSessionDetail {
  start: string;
  end: string;
  status: MarketStatus;
}

export interface MarketDefaultSession extends MarketSession {
  market: string;
  effectivity: Effectivity;
}

export interface MarketSpecialDay {
  reason: string;
  market: string;
  date: string;
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
