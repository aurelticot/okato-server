import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type MarketSession {
    date: String!
    startTime: String!
    endTime: String!
    mainStatus: MarketStatus!
    status: MarketStatus!
  }

  type Market {
    id: ID!
    code: String!
    name: String!
    city: String!
    country: String!
    longitude: Float!
    timezone: String!
    capitalisation: Float
    sessions(startDate: String!, endDate: String!): [MarketSession!]!
  }

  type Markets {
    total: Int!
    result: [Market!]!
  }

  enum MarketStatus {
    OPEN
    CLOSE
    CLOSE_SPECIAL
    BREAK
    BEFORE_MARKET
    AFTER_MARKET
  }

  enum MarketSortingMethod {
    ALPHABETICALLY
    ALPHABETICALLY_REVERSE
    CAPITALISATION
    CAPITALISATION_REVERSE
    CHRONOLOGICALLY
    CHRONOLOGICALLY_REVERSE
  }

  type Query {
    market(id: ID!): Market!
    markets(
      sort: MarketSortingMethod = CHRONOLOGICALLY
      limit: Int!
      page: Int!
      selection: [ID!]
    ): Markets!
  }
`;
