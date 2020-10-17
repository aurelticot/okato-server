import { getLogger } from "./lib/utils";
const logger = getLogger("app");

import { config } from "./config";
import cluster from "cluster";

const createWorker = (): cluster.Worker => {
  logger.silly("main.ts - enter createWorker()");
  logger.verbose(`Forking process...`);
  return cluster.fork();
};

const exitMain = (code: number) => {
  //eslint-disable-next-line
  for (const id in cluster.workers) {
    cluster.workers[id]?.kill();
  }

  process.exit(code);
};

export const run = (): void => {
  logger.silly("main.ts - enter Main#run()");
  logger.verbose(`Main process ${process.pid} is starting...`);

  const concurrency = config.concurrency;

  logger.debug(``);
  logger.debug(`========================================`);
  logger.debug(`NODE_ENV: ${config.nodeEnv}`);
  logger.debug(`PORT: ${config.port}`);
  logger.debug(`concurrency: ${concurrency}`);
  logger.debug(`========================================`);
  logger.debug(``);

  logger.verbose(`Creating ${concurrency} worker${concurrency > 1 ? "s" : ""}`);
  // eslint-disable-next-line no-loops/no-loops
  for (let i = 0; i < concurrency; i++) {
    createWorker();
  }

  cluster.on("exit", (_worker, code) => {
    if (code != 0) {
      logger.warn(`Restarting worker...`);
      createWorker();
    }
  });

  process.on("exit", (code) => {
    logger.warn(`Main process ${process.pid} exited with code ${code}`);
  });

  // Handle termination signal
  process.on("SIGTERM", () => {
    logger.warn(`Main process ${process.pid} received signal SIGTERM`);
    exitMain(0);
  });

  // Handle interruption signal
  process.on("SIGINT", () => {
    logger.warn(`Main process ${process.pid} has been interrupted`);
    exitMain(0);
  });

  // Handle uncaught Exceptions
  process.on("uncaughtException", (error) => {
    logger.error(`Uncaught Exception`, error);
    exitMain(1);
  });

  // Handle unhandled Promise rejection
  process.on("unhandledRejection", (reason, promise) => {
    logger.error(`Unhandled Promise rejection`, reason, promise);
    exitMain(1);
  });

  logger.info(`Main process ${process.pid} started`);
};
