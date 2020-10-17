import { getLogger } from "./lib/utils";
const logger = getLogger("app");

import { config } from "./config";
import cluster from "cluster";

const createWorker = (): cluster.Worker => {
  logger.silly("main.ts - enter createWorker()");
  logger.verbose(`Creating new worker process...`);
  return cluster.fork();
};

const createWorkers = (nbWorkers: number): void => {
  logger.silly("main.ts - enter createWorkers()");
  const nb = nbWorkers > 0 ? nbWorkers : 1;
  logger.info(`Creating ${nb} worker${nb > 1 ? "s" : ""}`);
  // eslint-disable-next-line no-loops/no-loops
  for (let i = 0; i < nb; i++) {
    createWorker();
  }
};

const shutdownWorkers = async (): Promise<boolean> => {
  logger.silly(`main.ts - enter #shutdownWorkers()`);
  return new Promise<boolean>((resolve) => {
    logger.info(`Shutting down the workers`);
    let cleanWorkersExit = true;

    const workerIds = Object.keys(cluster.workers);
    const workers = workerIds
      .map((id) => cluster.workers[id])
      .filter((worker) => worker) as cluster.Worker[];

    logger.debug(`Workers to shutdown: ${workers.length}`);

    workers.forEach((worker) => {
      worker.on("exit", (code) => {
        if (code !== 0) {
          logger.warn(
            `Graceful shutdown failed for worker process ${worker.process.pid}, exited with code ${code}`
          );
          cleanWorkersExit = false;
        }
      });
      logger.debug(
        `Gracefully shutting down worker process ${worker.process.pid}...`
      );
      worker.kill();
    });

    let nbWorkerAlive = 0;

    const checkWorkers = () => {
      logger.debug(`Checking worker exit...`);
      nbWorkerAlive = 0;
      workers.forEach((worker) => {
        if (worker.isDead()) {
          logger.debug(`Worker process ${worker.process.pid} has exited`);
        } else {
          logger.debug(`Worker process ${worker.process.pid} is still running`);
          ++nbWorkerAlive;
        }
      });
      logger.debug(`Workers still running: ${nbWorkerAlive}`);
      if (nbWorkerAlive === 0) {
        clearInterval(interval);
        return resolve(cleanWorkersExit);
      }
    };

    const interval = setInterval(checkWorkers, 500);
  });
};

const exitMain = (code: number): void => {
  logger.silly(`main.ts - enter #exitMain()`);
  logger.info(`Cleaning main process ${process.pid} before exit`);

  // Room for additional operations before exit

  logger.info(`Exiting main process ${process.pid}...`);
  process.exit(code);
};

const shutdownCluster = async (code: number): Promise<void> => {
  logger.silly(`main.ts - enter #shutdownCluster()`);
  logger.info(`Shutting down the cluster`);
  try {
    const cleanWorkersExit = await shutdownWorkers();
    exitMain(code === 0 && cleanWorkersExit ? 0 : 1);
  } catch (error) {
    logger.error(`Something went wrong while shutting down the workers`, error);
    exitMain(1);
  }
};

export const run = (): void => {
  logger.silly("main.ts - enter #run()");
  logger.verbose(`Main process ${process.pid} is starting...`);

  let shutdownInProgress = false;
  const concurrency = config.concurrency;

  logger.debug(``);
  logger.debug(`========================================`);
  logger.debug(`NODE_ENV: ${config.nodeEnv}`);
  logger.debug(`PORT: ${config.port}`);
  logger.debug(`concurrency: ${concurrency}`);
  logger.debug(`========================================`);
  logger.debug(``);

  // ===== Workers management =====

  cluster.on("exit", (worker, code) => {
    if (code != 0 && !shutdownInProgress) {
      logger.warn(
        `Worker process ${worker.process.pid} died, restarting a new worker...`
      );
      createWorker();
    }
  });

  logger.verbose(`Creating worker process(es)`);
  createWorkers(concurrency);

  // ===== event listener declaration =====

  process.on("exit", (code) => {
    logger.info(`Main process ${process.pid} exited with code ${code}`);
  });

  const handleShutdown = (code: number): void => {
    if (shutdownInProgress) {
      logger.debug(`Main process ${process.pid} shutdown already in progress`);
      return;
    }
    shutdownInProgress = true;
    void shutdownCluster(code);
  };

  const handleSignal = (code: number, signal: NodeJS.Signals): void => {
    logger.warn(`Main process ${process.pid} received signal ${signal}`);
    handleShutdown(code);
  };

  // Handle signals
  process.on("SIGTERM", () => handleSignal(0, "SIGTERM"));
  process.on("SIGINT", () => handleSignal(0, "SIGINT"));

  // Handle uncaught Exceptions
  process.on("uncaughtException", (error) => {
    logger.error(
      `Main process ${process.pid} got an uncaught Exception`,
      error
    );
    handleShutdown(1);
  });

  // Handle unhandled Promise rejection
  process.on("unhandledRejection", (reason, promise) => {
    logger.error(
      `Main process ${process.pid} got an unhandled Promise rejection`,
      reason,
      promise
    );
    handleShutdown(1);
  });

  logger.info(`Main process ${process.pid} started`);
};
