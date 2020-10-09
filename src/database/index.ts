import { Database } from "../lib/types";
import { markets } from "./markets";
import { marketDefaultSessions } from "./marketDefaultSessions";
import { marketSpecialDays } from "./marketSpecialDays";

export const connectDatabase = (): Database => {
  const db: Database = {
    markets,
    marketDefaultSessions,
    marketSpecialDays,
  };

  return db;
};
