import { getLogger } from "./lib/utils";
const logger = getLogger("app");

import { config } from "./config";
import { Server } from "./server";

export default class Worker {
  constructor() {}

  run = (): void => {
    logger.silly("worker.ts - enter Worker#run()");
    logger.verbose(`Worker ${process.pid} started`);

    const server = Server();
    logger.info(`Starting server...`);
    server.start(config.port);
    logger.info(`Server started`);
  };
}
