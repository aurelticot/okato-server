import { getLogger } from "./lib/utils";
const logger = getLogger("server");

import express, { Express } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import { requestId, requestLogger, startAt } from "./lib/middlewares";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./api/graphql";
import { GraphQLContext } from "./lib/types";
import { connectDatabase } from "./database";

export default class Server {
  private readonly port: number;
  private readonly server: Express;

  constructor(port: number) {
    this.port = port;
    this.server = express();

    //declare middleware
    this.server.use(startAt());
    this.server.use(requestId());
    this.server.use(helmet());
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.use(bodyParser.json({ limit: "2mb" }));
    this.server.use(requestLogger());

    const db = connectDatabase();

    // declare graphql API
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req, res }): GraphQLContext => ({ req, res, db }),
    });
    apolloServer.applyMiddleware({ app: this.server, path: "/api/graphql" });

    // serve client
    this.server.use(express.static(`${__dirname}/client`));
    this.server.get("/*", (_req, res) =>
      res.sendFile(`${__dirname}/client/index.html`)
    );
  }

  start = (): void => {
    this.server.listen(this.port, () => {
      logger.info(`Server listenning on port: ${this.port}`);
    });
  };
}
