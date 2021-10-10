import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type MarketSession {
    start: String!
    end: String!
    mainStatus: MarketStatus!
    status: MarketStatus!
    reason: String
  }

  type TimelineSegment {
    startDate: String!
    start: Float!
    duration: Float!
    mainStatus: MarketStatus!
    status: MarketStatus!
  }

  type Market {
    id: ID!
    mic: String!
    shortName: String!
    name: String!
    currency: String!
    city: String!
    country: String!
    latitude: Float!
    longitude: Float!
    timezone: String!
    capitalisation: Float
    website: String
    sessions(startDate: String!, endDate: String!): [MarketSession!]!
    timeline(startDate: String!, endDate: String!): [TimelineSegment!]!
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
