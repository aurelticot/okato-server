import merge from "lodash.merge";
import find from "lodash.find";
import { DateTime } from "luxon";
import { IResolvers } from "apollo-server-express";
import { NotFoundError } from "../../../../lib/errors";
import {
  GraphQLContext,
  Market,
  MarketSpecialDay,
  EffectivityStatus,
} from "../../../../lib/types";
import {
  getMarketSortingFunction,
  getMarketMainStatus,
} from "../../../../lib/utils";
import {
  MarketVariables,
  MarketsVariables,
  MarketsData,
  MarketSessionsVariables,
  MarketSessionData,
} from "./types";

const rootResolvers: IResolvers<undefined, GraphQLContext> = {
  Query: {
    market: (_root, { id }: MarketVariables, { db }): Market => {
      const foundMarket = db.markets.find((market) => market.id === id);
      if (!foundMarket) {
        throw new NotFoundError(`Market with id ${id} has not been found`);
      }
      return foundMarket;
    },
    markets: (
      _root,
      { limit, page, sort }: MarketsVariables,
      { db }
    ): MarketsData => {
      const total = db.markets.length;
      const startItem = limit * (page - 1);
      const endItem = startItem + limit;
      const returnedMarkets = [...db.markets]
        .sort(getMarketSortingFunction(sort))
        .slice(startItem, endItem);
      return {
        total,
        result: returnedMarkets,
      };
    },
  },
};

const entityResolvers: IResolvers<Market, GraphQLContext> = {
  Market: {
    sessions: (
      market,
      { startDate, endDate }: MarketSessionsVariables,
      { db }
    ): MarketSessionData[] => {
      const start = DateTime.fromISO(startDate).startOf("day");
      const end = DateTime.fromISO(endDate).endOf("day");

      const defaultSessions = db.marketDefaultSessions.filter(
        (marketDefaultSession) => {
          return (
            marketDefaultSession.effectivity.status ===
              EffectivityStatus.ACTIVE &&
            marketDefaultSession.market === market.id
          );
        }
      );

      let returnedSessions: MarketSessionData[] = [];

      let dateCursor = start;
      // eslint-disable-next-line no-loops/no-loops
      while (!dateCursor.hasSame(end.plus({ day: 1 }), "day")) {
        const weekday = dateCursor.weekday;
        const formattedDay = dateCursor.toISODate();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const specialDay = find(
          db.marketSpecialDays,
          (marketSpecialDay: MarketSpecialDay) => {
            return (
              marketSpecialDay.market === market.id &&
              marketSpecialDay.date === formattedDay
            );
          }
        ) as MarketSpecialDay | undefined;

        const dateSessions = specialDay ? specialDay.sessions : defaultSessions;

        const daySessions: MarketSessionData[] = dateSessions
          .filter((session) => session.weekday === weekday)
          .map((session) => {
            return {
              date: formattedDay,
              startTime: session.start,
              endTime: session.end,
              status: session.status,
              mainStatus: getMarketMainStatus(session.status),
            };
          });

        returnedSessions = [...returnedSessions, ...daySessions];

        dateCursor = dateCursor.plus({ days: 1 });
      }

      return returnedSessions;
    },
  },
};

export const marketResolvers = merge(rootResolvers, entityResolvers);
