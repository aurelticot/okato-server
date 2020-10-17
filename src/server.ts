import { getLogger } from "./lib/utils";
const logger = getLogger("server");

import http from "http";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import { requestId, requestLogger, startAt } from "./lib/middlewares";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./api/graphql";
import { GraphQLContext } from "./lib/types";
import { connectDatabase } from "./database";

export const createServer = (): {
  start: (port: number) => void;
} => {
  const app = express();

  //declare middleware
  app.use(startAt());
  app.use(requestId());
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: "2mb" }));
  app.use(requestLogger());

  const db = connectDatabase();

  // declare graphql API
  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }): GraphQLContext => ({ req, res, db }),
  });
  graphqlServer.applyMiddleware({ app, path: "/api/graphql" });

  // serve client
  app.use(express.static(`${__dirname}/client`));
  app.get("/*", (_req, res) => res.sendFile(`${__dirname}/client/index.html`));

  const server = http.createServer(app);

  const start = (port: number) => {
    server.listen(port, () => {
      logger.info(`Server listenning on port: ${port}`);
    });
  };

  return { start };
};
