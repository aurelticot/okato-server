import { getLogger } from "./lib/utils";
const logger = getLogger("app");

import { config } from "./config";
import cluster from "cluster";

const createWorker = (): cluster.Worker => {
  logger.silly("main.ts - enter createWorker()");
  logger.verbose(`Forking process...`);
  return cluster.fork();
};

export const run = (): void => {
  logger.silly("main.ts - enter Main#run()");
  logger.verbose(`Main ${process.pid} is started`);

  const concurrency = config.concurrency;

  logger.info(`Starting application...`);
  logger.debug(``);
  logger.debug(`========================================`);
  logger.debug(`NODE_ENV: ${config.nodeEnv}`);
  logger.debug(`PORT: ${config.port}`);
  logger.debug(`concurrency: ${concurrency}`);
  logger.debug(`========================================`);
  logger.debug(``);

  logger.verbose(`Creating ${concurrency} workers`);
  // eslint-disable-next-line no-loops/no-loops
  for (let i = 0; i < concurrency; i++) {
    createWorker();
  }

  cluster.on("exit", (worker, code, signal) => {
    logger.warn(
      `Worker ${worker.process.pid} died${code || signal ? " with " : ""}${
        code ? `code ${code}` : ""
      }${code && signal ? " and " : ""}${signal ? `signal ${signal}` : ""}`
    );
    //logger.warn(`Restarting worker...`);
    //createWorker();
  });

  logger.info(`Application started`);
};
