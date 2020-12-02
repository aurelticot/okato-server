import { MarketSpecialDay, MarketStatus } from "../lib/types";

export const marketSpecialDays: MarketSpecialDay[] = [
  {
    market: "XNYS",
    reason: "Thanksgiving Day",
    date: "2020-11-26",
    sessions: [
      {
        start: "09:30",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Thanksgiving Day",
    date: "2020-11-27",
    sessions: [
      {
        start: "09:30",
        end: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "13:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:30",
        end: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "13:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:30",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Thanksgiving Day",
    date: "2020-11-26",
    sessions: [
      {
        start: "09:30",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Thanksgiving Day",
    date: "2020-11-27",
    sessions: [
      {
        start: "09:30",
        end: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "13:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:30",
        end: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "13:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:30",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "08:00",
        end: "12:30",
        status: MarketStatus.OPEN,
      },
      {
        start: "12:30",
        end: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "08:00",
        end: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Boxing Day",
    date: "2020-12-28",
    sessions: [
      {
        start: "08:00",
        end: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "08:00",
        end: "12:30",
        status: MarketStatus.OPEN,
      },
      {
        start: "12:30",
        end: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Worker's Day",
    date: "2020-12-23",
    sessions: [
      {
        start: "09:00",
        end: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Market Holiday",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:30",
        end: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "12:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:30",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:30",
        end: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "12:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XAMS",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:00",
        end: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:05",
        end: "17:40",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XAMS",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:00",
        end: "17:40",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XAMS",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:05",
        end: "17:40",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:30",
        end: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "13:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:30",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Boxing Day",
    date: "2020-12-28",
    sessions: [
      {
        start: "09:30",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Guru Nanak Jayanti",
    date: "2020-11-30",
    sessions: [
      {
        start: "09:15",
        end: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:15",
        end: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "10:00",
        end: "14:10",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:10",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "10:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Boxing Day",
    date: "2020-12-28",
    sessions: [
      {
        start: "10:00",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "10:00",
        end: "14:10",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:10",
        end: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:00",
        end: "14:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "14:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "10:00",
        end: "12:45",
        status: MarketStatus.OPEN,
      },
      {
        start: "12:45",
        end: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "10:00",
        end: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Boxing Day",
    date: "2020-12-28",
    sessions: [
      {
        start: "10:00",
        end: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "10:00",
        end: "12:45",
        status: MarketStatus.OPEN,
      },
      {
        start: "12:45",
        end: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:00",
        end: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "12:00",
        end: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:00",
        end: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        start: "12:00",
        end: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:00",
        end: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:05",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:05",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:00",
        end: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:05",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:05",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:00",
        end: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:05",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        start: "14:05",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "Christmas",
    date: "2020-12-24",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "Christmas",
    date: "2020-12-25",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "New Year's Day",
    date: "2020-12-31",
    sessions: [
      {
        start: "09:00",
        end: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
];
