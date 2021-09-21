import { MarketSpecialDay, MarketStatus } from "../lib/types";

export const marketSpecialDays: MarketSpecialDay[] = [
  {
    market: "XNYS",
    reason: "Thanksgiving Day",
    localDate: "2020-11-26",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Thanksgiving Day",
    localDate: "2020-11-27",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "13:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "13:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Martin Luther King, Jr's birthday",
    localDate: "2021-01-18",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Washington's birthday",
    localDate: "2021-02-15",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Memorial Day",
    localDate: "2021-05-31",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Independence Day",
    localDate: "2021-07-05",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Labor Day",
    localDate: "2021-09-06",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Thanksgiving Day",
    localDate: "2021-11-25",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "13:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Thanksgiving Day",
    localDate: "2021-11-26",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNYS",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Thanksgiving Day",
    localDate: "2020-11-26",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Thanksgiving Day",
    localDate: "2020-11-27",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "13:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "13:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Martin Luther King, Jr's birthday",
    localDate: "2021-01-18",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Washington's birthday",
    localDate: "2021-02-15",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Memorial Day",
    localDate: "2021-05-31",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Independence Day",
    localDate: "2021-07-05",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Labor Day",
    localDate: "2021-09-06",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Thanksgiving Day",
    localDate: "2021-11-25",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Thanksgiving Day",
    localDate: "2021-11-26",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "13:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNAS",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "12:30",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:30",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Boxing Day",
    localDate: "2020-12-28",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "12:30",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:30",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Easter Day",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Bank Holiday",
    localDate: "2021-05-03",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Bank Holiday",
    localDate: "2021-05-31",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Bank Holiday",
    localDate: "2021-08-02",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "12:30",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:30",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLON",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "08:00",
        localEndTime: "12:30",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:30",
        localEndTime: "16:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Worker's Day",
    localDate: "2020-12-23",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Market Holiday",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Market Holiday",
    localDate: "2021-01-02",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Market Holiday",
    localDate: "2021-01-03",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Old Age Day",
    localDate: "2021-01-11",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "National Day",
    localDate: "2021-02-11",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Emperor's Birthday",
    localDate: "2021-02-23",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Vernal Equinox",
    localDate: "2021-03-20",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Showa day",
    localDate: "2021-04-29",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Constitution Day",
    localDate: "2021-05-03",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Greenery Day",
    localDate: "2021-05-04",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Children's Day",
    localDate: "2021-05-05",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Marine Day",
    localDate: "2021-07-19",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Mountain Day",
    localDate: "2021-08-11",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Old Age Day",
    localDate: "2021-09-20",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Autumnal Equinox",
    localDate: "2021-09-23",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Sports Day",
    localDate: "2021-10-11",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Culture Day",
    localDate: "2021-11-03",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Worker's Day",
    localDate: "2021-11-23",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XJPX",
    reason: "Market Holiday",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "Chinese New Year",
    localDate: "2021-02-11",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "Chinese New Year",
    localDate: "2021-02-12",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "Chinese New Year",
    localDate: "2021-02-15",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "Chinese New Year",
    localDate: "2021-02-16",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "Chinese New Year",
    localDate: "2021-02-17",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "Qingming Festival",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "Dragon Boat Festival",
    localDate: "2021-06-14",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "Mid-Autumn Festival",
    localDate: "2021-09-21",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "National Day",
    localDate: "2021-10-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "National Day",
    localDate: "2021-10-04",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "National Day",
    localDate: "2021-10-05",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "National Day",
    localDate: "2021-10-06",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHG",
    reason: "National Day",
    localDate: "2021-10-07",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "15:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Chinese New Year",
    localDate: "2021-02-11",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Chinese New Year",
    localDate: "2021-02-12",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Chinese New Year",
    localDate: "2021-02-15",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Good Friday",
    localDate: "2021-04-04",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Qingming Festival",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Easter",
    localDate: "2021-04-06",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "National Day",
    localDate: "2021-05-19",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Dragon Boat Festival",
    localDate: "2021-06-14",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Special Administrative Region Establishment Day",
    localDate: "2021-07-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "National Day",
    localDate: "2021-09-22",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "National Day",
    localDate: "2021-10-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "National Day",
    localDate: "2021-10-14",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "Christmas",
    localDate: "2021-12-27",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XHKG",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },

  {
    market: "XAMS",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:40",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XAMS",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:40",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XAMS",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:40",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XAMS",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:40",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "Chinese New Year",
    localDate: "2021-02-11",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "Chinese New Year",
    localDate: "2021-02-12",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "Chinese New Year",
    localDate: "2021-02-15",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "Chinese New Year",
    localDate: "2021-02-16",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "Chinese New Year",
    localDate: "2021-02-17",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "Qingming Festival",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "Dragon Boat Festival",
    localDate: "2021-06-14",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "Mid-Autumn Festival",
    localDate: "2021-09-21",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "National Day",
    localDate: "2021-10-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "National Day",
    localDate: "2021-10-04",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "National Day",
    localDate: "2021-10-05",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "National Day",
    localDate: "2021-10-06",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSHE",
    reason: "National Day",
    localDate: "2021-10-07",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "14:57",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "13:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "13:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Boxing Day",
    localDate: "2020-12-28",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Family Day",
    localDate: "2021-02-15",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Victoria Day",
    localDate: "2021-05-24",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Canada Day",
    localDate: "2021-07-01",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Civic Day",
    localDate: "2021-08-02",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Labor Day",
    localDate: "2021-09-06",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Thanksgiving Day",
    localDate: "2021-10-11",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Christmas",
    localDate: "2021-12-27",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XTSE",
    reason: "Christmas",
    localDate: "2021-12-28",
    sessions: [
      {
        localStartTime: "09:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Guru Nanak Jayanti",
    localDate: "2020-11-30",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Republic Day",
    localDate: "2021-01-26",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Maha Shivratri Day",
    localDate: "2021-03-11",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Holi",
    localDate: "2021-03-29",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Dr. Baba Saheb Ambedkar Jayanti",
    localDate: "2021-04-14",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Eid al-Fitr",
    localDate: "2021-05-13",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Eid al-Adha",
    localDate: "2021-07-20",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Ashura",
    localDate: "2021-08-19",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Ganesh Chaturthi",
    localDate: "2021-09-10",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Dussehra",
    localDate: "2021-10-15",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Diwali",
    localDate: "2021-11-04",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBOM",
    reason: "Guru Nanak Jayanti",
    localDate: "2021-11-19",
    sessions: [
      {
        localStartTime: "09:15",
        localEndTime: "15:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "14:10",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:10",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Boxing Day",
    localDate: "2020-12-28",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "14:10",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:10",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },

  {
    market: "XASX",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Australia Day",
    localDate: "2021-01-26",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Easter Monday",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "14:30",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XASX",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "14:30",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:30",
        localEndTime: "16:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },

  {
    market: "XMAD",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Easter",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Labor Day",
    localDate: "2021-05-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "Christmas",
    localDate: "2021-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMAD",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "12:45",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:45",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Boxing Day",
    localDate: "2020-12-28",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "12:45",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:45",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "New Year's Day",
    localDate: "2021-01-04",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "National Day",
    localDate: "2021-02-08",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Easter",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "ANZAC Day",
    localDate: "2021-04-26",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Queen's Birthday",
    localDate: "2021-06-07",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Labor Day",
    localDate: "2021-10-25",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "12:45",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:45",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Christmas",
    localDate: "2021-12-27",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "Boxing Day",
    localDate: "2021-12-28",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XNZE",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "10:00",
        localEndTime: "12:45",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:45",
        localEndTime: "16:45",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Chinese New Year",
    localDate: "2021-02-11",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Chinese New Year",
    localDate: "2021-02-12",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Natinoal Day",
    localDate: "2021-08-09",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XSES",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "12:00",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "12:00",
        localEndTime: "17:00",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },

  {
    market: "XPAR",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "Easter Monday",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XPAR",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "Easter Monday",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XBRU",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "Easter Monday",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XLIS",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "14:05",
        status: MarketStatus.OPEN,
      },
      {
        localStartTime: "14:05",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "Easter Monday",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "Pentecost",
    localDate: "2021-05-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XETR",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "Christmas",
    localDate: "2020-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "Christmas",
    localDate: "2020-12-25",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "New Year's Day",
    localDate: "2020-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "New Year's Day",
    localDate: "2021-01-01",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "Epiphany",
    localDate: "2021-01-06",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "Good Friday",
    localDate: "2021-04-02",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "Easter",
    localDate: "2021-04-05",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "Christmas",
    localDate: "2021-12-24",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
  {
    market: "XMIL",
    reason: "New Year's Day",
    localDate: "2021-12-31",
    sessions: [
      {
        localStartTime: "09:00",
        localEndTime: "17:30",
        status: MarketStatus.CLOSE_SPECIAL,
      },
    ],
  },
];
