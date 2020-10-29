import { getLogger } from "./lib/utils";
const logger = getLogger("server");
import { crashReporter } from "./lib/utils";

import { config } from "./config";
import http from "http";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import {
  corsMiddleware as cors,
  requestId,
  requestLogger,
  startAt,
} from "./lib/middlewares";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers, plugins, formatError } from "./api/graphql";
import { GraphQLContext } from "./lib/types";
import { connectDatabase } from "./database";

const { enableRateLimit } = config;

export const createServer = (): http.Server => {
  logger.verbose(`Configuring server...`);
  const app = express();

  //declare middleware
  app.set("trust proxy", 1);
  if (enableRateLimit) {
    logger.info(`Rate limiting is enabled`);
    app.use(
      rateLimit({
        windowMs: 60 * 1000, // 1 minute
        max: 5,
      })
    );
  } else {
    logger.warn(`Rate limiting is disabled`);
  }

  app.use(startAt());
  app.use(requestId());
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: "2mb" }));
  app.use(requestLogger());
  app.use(cors());

  logger.info("Connecting to database...");
  const db = connectDatabase();
  logger.info("Database connected");

  // declare graphql API
  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }): GraphQLContext => ({ req, res, db }),
    plugins,
    formatError,
  });
  graphqlServer.applyMiddleware({ app, path: "/api/graphql" });

  // Health check route
  app.get("/health", (_req, res) => res.status(200).send("ok"));

  // eslint-disable-next-line @typescript-eslint/unbound-method
  app.use(crashReporter.expressHandler);

  return http.createServer(app);
};
