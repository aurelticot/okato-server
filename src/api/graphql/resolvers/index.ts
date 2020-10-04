import merge from "lodash.merge";
import { IResolvers } from "apollo-server-express";
import { marketResolvers } from "./market";

export const resolvers: IResolvers = merge(marketResolvers) as IResolvers;
