import { Market, MarketSort, MarketStatus } from "../types";

export const sortMarketAlphabetically = (
  marketA: Market,
  marketB: Market
): number => {
  return marketA.shortName.localeCompare(marketB.shortName);
};

export const sortMarketAlphabeticallyReverse = (
  marketA: Market,
  marketB: Market
): number => {
  return sortMarketAlphabetically(marketB, marketA);
};

export const sortMarketChronologically = (
  marketA: Market,
  marketB: Market
): number => {
  return marketB.longitude - marketA.longitude;
};

export const sortMarketChronologicallyReverse = (
  marketA: Market,
  marketB: Market
): number => {
  return sortMarketChronologically(marketB, marketA);
};

export const sortMarketCapitalisation = (
  marketA: Market,
  marketB: Market
): number => {
  return marketB.capitalisation - marketA.capitalisation;
};

export const sortMarketCapitalisationReverse = (
  marketA: Market,
  marketB: Market
): number => {
  return sortMarketCapitalisation(marketB, marketA);
};

export const getMarketSortingFunction = (
  sort: MarketSort
): ((marketA: Market, marketB: Market) => number) => {
  switch (sort) {
    case MarketSort.ALPHABETICALLY:
      return sortMarketAlphabetically;
    case MarketSort.ALPHABETICALLY_REVERSE:
      return sortMarketAlphabeticallyReverse;
    case MarketSort.CHRONOLOGICALLY:
      return sortMarketChronologically;
    case MarketSort.CHRONOLOGICALLY_REVERSE:
      return sortMarketChronologicallyReverse;
    case MarketSort.CAPITALISATION:
      return sortMarketCapitalisation;
    case MarketSort.CAPITALISATION_REVERSE:
      return sortMarketCapitalisationReverse;
    default:
      return sortMarketCapitalisation;
  }
};

export const getMarketMainStatus = (status: MarketStatus): MarketStatus => {
  switch (status) {
    case MarketStatus.OPEN:
      return MarketStatus.OPEN;
    case MarketStatus.CLOSE:
    case MarketStatus.CLOSE_SPECIAL:
    case MarketStatus.BREAK:
    case MarketStatus.BEFORE_MARKET:
    case MarketStatus.AFTER_MARKET:
    default:
      return MarketStatus.CLOSE;
  }
};
