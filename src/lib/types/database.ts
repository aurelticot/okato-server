import { Market, MarketSpecialDay, MarketDefaultSession } from "./market";

export interface Database {
  markets: Market[];
  marketDefaultSessions: MarketDefaultSession[];
  marketSpecialDays: MarketSpecialDay[];
}
