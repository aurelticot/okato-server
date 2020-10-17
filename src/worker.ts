import { getLogger } from "./lib/utils";
const logger = getLogger("app");

import { config } from "./config";
import { createServer } from "./server";

export const run = (): void => {
  logger.silly("worker.ts - enter Worker#run()");
  logger.verbose(`Worker ${process.pid} started`);

  const server = createServer();
  logger.info(`Starting server...`);
  server.start(config.port);
  logger.info(`Server started`);
};
