import { getLogger } from "./lib/utils";
const logger = getLogger("app");

import { config } from "./config";
import cluster from "cluster";

export default class Main {
  constructor() {}

  createWorker(): cluster.Worker {
    logger.silly("main.ts - enter createWorker()");
    logger.verbose(`Forking process...`);
    return cluster.fork();
  }

  run = (): void => {
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
      this.createWorker();
    }

    cluster.on("exit", (worker, code, signal) => {
      logger.warn(
        `Worker ${worker.process.pid} died with code/signal ${code || signal}`
      );
      logger.warn(`Restarting worker ...`);
      this.createWorker();
    });

    logger.info(`Application started`);
  };
}
