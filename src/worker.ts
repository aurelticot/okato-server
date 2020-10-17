import { getLogger } from "./lib/utils";
const logger = getLogger("app");

import { config } from "./config";
import { createServer } from "./server";

const exitWorker = (code: number, server, timeout = 1000) => {
  setTimeout(() => {
    logger.info(`Cannot stop server before exiting process`);
    process.exit(code);
  }, timeout).unref();
  server.close(() => {
    logger.info(`Server stopped before exiting process`);
    process.exit(code);
  });
};

export const run = (): void => {
  logger.silly("worker.ts - enter Worker#run()");
  logger.verbose(`Worker ${process.pid} is starting...`);

  const server = createServer();
  server.start(config.port);

  process.on("exit", (code) => {
    logger.warn(`Worker ${process.pid} exited with code ${code}`);
  });

  process.on("SIGTERM", () => {
    logger.warn(`Worker ${process.pid} received signal SIGTERM`);
    exitWorker(0, server);
  });

  process.on("uncaughtException", (error) => {
    logger.error(`Uncaught Exception`, error);
    exitWorker(1, server);
  });

  process.on("unhandledRejection", (reason, promise) => {
    logger.error(`Unhandled Promise Rejection`, reason, promise);
    exitWorker(1, server);
  });

  logger.verbose(`Worker ${process.pid} started`);
};
