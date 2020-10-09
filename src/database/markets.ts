import { Market } from "../lib/types";

export const markets: Market[] = [
  {
    id: "ASX",
    code: "ASX",
    name: "ASX",
    city: "Sydney",
    country: "AU",
    timezone: "Australia/Sydney",
    timezoneOffset: 10,
    longitude: 151.2099,
    capitalisation: 1320000000000,
  },
  {
    id: "EURONEXT",
    code: "EURONEXT",
    name: "EURONEXT",
    city: "Paris",
    country: "FR",
    timezone: "Europe/Paris",
    timezoneOffset: 2,
    longitude: 2.349014,
    capitalisation: 7330000000,
  },
  {
    id: "NYSE",
    code: "NYSE",
    name: "NYSE",
    city: "New York",
    country: "US",
    timezone: "America/New_York",
    timezoneOffset: -4,
    longitude: -73.935242,
    capitalisation: 21040000000000,
  },
  {
    id: "NASDAQ",
    code: "NASDAQ",
    name: "NASDAQ",
    city: "New York",
    country: "US",
    timezone: "America/New_York",
    timezoneOffset: -4,
    longitude: -73.935242,
    capitalisation: 14650000000000,
  },
  {
    id: "HKEX",
    code: "HKEX",
    name: "HKEX",
    city: "Hong Kong",
    country: "CN",
    timezone: "Asia/Hong_Kong",
    timezoneOffset: 8,
    longitude: 114.177216,
    capitalisation: 4890000000000,
  },
  {
    id: "SGX",
    code: "SGX",
    name: "SGX",
    city: "Singapore",
    country: "SG",
    timezone: "Asia/Singapore",
    timezoneOffset: 8,
    longitude: 103.851959,
    capitalisation: 585920000000,
  },
  {
    id: "LSE",
    code: "LSE",
    name: "LSE",
    city: "London",
    country: "GB",
    timezone: "Europe/London",
    timezoneOffset: 1,
    longitude: -0.118092,
    capitalisation: 3230000000000,
  },
];
