import merge from "lodash.merge";
import { DateTime } from "luxon";
import { IResolvers } from "apollo-server-express";
import { BadRequestError, NotFoundError } from "../../../../lib/errors";
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
        throw new NotFoundError(`Market has not been found.`, { id });
      }
      return foundMarket;
    },
    markets: (
      _root,
      { limit, page, sort }: MarketsVariables,
      { db }
    ): MarketsData => {
      if (limit < 1) {
        throw new BadRequestError("The limit shall be greater than 0.", {
          limit,
        });
      }
      if (page < 1) {
        throw new BadRequestError("The page shall be greater than 0.", {
          page,
        });
      }

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
      const rawStartDate = DateTime.fromISO(startDate);
      if (!rawStartDate.isValid) {
        throw new BadRequestError("The sessions start date is not valid.", {
          startDate,
        });
      }
      const rawEndDate = DateTime.fromISO(endDate);
      if (!rawEndDate.isValid) {
        throw new BadRequestError("The sessions end date is not valid.", {
          endDate,
        });
      }

      const start = rawStartDate.startOf("day");
      const end = rawEndDate.endOf("day");

      if (end.diff(start).as("days") > 30) {
        throw new BadRequestError(
          "The range between the sessions start and end date must be less or equal to 30 days.",
          { startDate, endDate }
        );
      }

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

        const specialDays = db.marketSpecialDays.filter(
          (marketSpecialDay: MarketSpecialDay) => {
            return (
              marketSpecialDay.market === market.id &&
              marketSpecialDay.date === formattedDay
            );
          }
        );

        const dateSessions =
          specialDays.length > 0 ? specialDays[0].sessions : defaultSessions;

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
