import { MarketSpecialDay, MarketStatus } from "../lib/types";

export const marketSpecialDays: MarketSpecialDay[] = [
  {
    market: "ASX",
    date: "2020-10-09",
    sessions: [
      {
        weekday: 5,
        start: "10:00",
        end: "15:59",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "EURONEXT",
    date: "2020-10-09",
    sessions: [
      {
        weekday: 5,
        start: "09:00",
        end: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        weekday: 5,
        start: "12:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "LSE",
    date: "2020-10-08",
    sessions: [
      {
        weekday: 4,
        start: "08:00",
        end: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
];
