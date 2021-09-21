import { getLogger, buildSessionsForDates } from "../../../../lib/utils";
const logger = getLogger("graphql");

import merge from "lodash.merge";
import { DateTime } from "luxon";
import { IResolvers } from "apollo-server-express";
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
import {
  GraphQLInvalidArgsError,
  GraphQLNotFoundError,
} from "../../../../lib/errors";

const rootResolvers: IResolvers<undefined, GraphQLContext> = {
  Query: {
    market: (_root, { id }: MarketVariables, { db, req }): Market => {
      const profiler = logger.startTimer();
      const { requestId } = req;
      logger.verbose(`Starting GraphQL request resolver 'market'...`, {
        requestId,
        graphql: { resolver: "market" },
      });

      // -----------------------------------------------------------------------

      logger.info(`Looking for market with id: ${id}`);
      const foundMarket = db.markets.find((market) => market.id === id);
      if (!foundMarket) {
        logger.info(`Market with id ${id} not found`);
        throw new GraphQLNotFoundError(`Market has not been found.`, { id });
      }

      // -----------------------------------------------------------------------

      profiler.done({
        message: `GraphQL request resolver 'market' done`,
        requestId,
        graphql: { resolver: "market" },
      });
      return foundMarket;
    },
    markets: (
      _root,
      { limit, page, sort, selection = [] }: MarketsVariables,
      { db, req }
    ): MarketsData => {
      const profiler = logger.startTimer();
      const { requestId } = req;
      logger.verbose(`Starting GraphQL request resolver 'markets'...`, {
        requestId,
        graphql: { resolver: "markets" },
      });

      // -----------------------------------------------------------------------

      if (limit < 1) {
        throw new GraphQLInvalidArgsError(
          "The limit shall be greater than 0.",
          {
            limit,
          }
        );
      }
      if (page < 1) {
        throw new GraphQLInvalidArgsError("The page shall be greater than 0.", {
          page,
        });
      }

      const startItem = limit * (page - 1);
      const endItem = startItem + limit;
      const filteredMarkets = [...db.markets].filter(
        (market) => selection.length === 0 || selection.includes(market.id)
      );
      const returnedMarkets = filteredMarkets
        .sort(getMarketSortingFunction(sort))
        .slice(startItem, endItem);
      const total = filteredMarkets.length;

      // -----------------------------------------------------------------------

      profiler.done({
        message: `GraphQL request resolver 'markets' done`,
        requestId,
        graphql: { resolver: "markets" },
      });
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
      { db, req }
    ): MarketSessionData[] => {
      const profiler = logger.startTimer();
      const { requestId } = req;
      logger.verbose(`Starting GraphQL request resolver 'Market.sessions'...`, {
        requestId,
        graphql: { resolver: "Market.sessions" },
      });

      // -----------------------------------------------------------------------

      const rawStartDate = DateTime.fromISO(startDate);
      if (!rawStartDate.isValid) {
        throw new GraphQLInvalidArgsError(
          "The sessions start date is not valid.",
          { startDate }
        );
      }
      const rawEndDate = DateTime.fromISO(endDate);
      if (!rawEndDate.isValid) {
        throw new GraphQLInvalidArgsError(
          "The sessions end date is not valid.",
          { endDate }
        );
      }

      const start = rawStartDate.startOf("day");
      const end = rawEndDate.endOf("day");

      const duration = end.diff(start).as("days");
      if (duration < 1 || duration > 30) {
        throw new GraphQLInvalidArgsError(
          "The range between the sessions start and end date must be between 1 and 30 days.",
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

      const specialDays = db.marketSpecialDays.filter(
        (marketSpecialDay: MarketSpecialDay) => {
          return marketSpecialDay.market === market.id;
        }
      );

      const returnedSessions: MarketSessionData[] = buildSessionsForDates(
        start,
        end,
        market.timezone,
        defaultSessions,
        specialDays
      ).map((session) => {
        return {
          start: session.start.toISO(),
          end: session.end.toISO(),
          mainStatus: getMarketMainStatus(session.status),
          status: session.status,
          reason: session.reason,
        };
      });

      // -----------------------------------------------------------------------

      profiler.done({
        message: `GraphQL request resolver 'Market.sessions' done`,
        requestId,
        graphql: { resolver: "Market.sessions" },
      });
      return returnedSessions;
    },
  },
};

export const marketResolvers = merge(rootResolvers, entityResolvers);
