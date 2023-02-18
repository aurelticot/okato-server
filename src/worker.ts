import { getLogger } from "./lib/utils";
const logger = getLogger("app");
import http from "http";
import { config } from "./config";
import { createServer } from "./server";

const exitWorker = (code: number, server: http.Server, timeout = 1000) => {
  logger.silly("worker.ts - enter #exitWorker()");
  logger.info(`Cleaning worker process ${process.pid} before exit`);

  // Ensure the process exit even if the cleaning fails
  setTimeout(() => {
    logger.warn(`Cannot stop server before exiting process`);
    logger.info(`Exiting worker process ${process.pid}...`);
    process.exit(code === 0 ? 1 : code);
  }, timeout).unref();

  // Clean before exit
  logger.info(`Stopping the server...`);
  server.close(() => {
    logger.info(`Server stopped successfully`);
    logger.info(`Exiting worker process ${process.pid}...`);
    process.exit(code);
  });
};

export const run = (): void => {
  logger.silly("worker.ts - enter #run()");
  logger.verbose(`Worker process ${process.pid} is starting...`);

  const port = config.port;
  const server = createServer();
  logger.info(`Starting server...`);
  server.listen(port, () => {
    logger.info(`Server listenning on port: ${port}`);
  });

  let shutdownInProgress = false;

  // ===== event listener declaration =====

  const handleShutdown = (code: number): void => {
    if (shutdownInProgress) {
      logger.debug(
        `Worker process ${process.pid} shutdown already in progress`
      );
      return;
    }
    shutdownInProgress = true;
    exitWorker(code, server);
  };

  const handleSignal = (code: number, signal: NodeJS.Signals): void => {
    logger.warn(`Worker process ${process.pid} received signal ${signal}`);
    handleShutdown(code);
  };

  process.on("exit", (code) => {
    logger.info(`Worker process ${process.pid} exited with code ${code}`);
  });

  process.on("SIGTERM", () => handleSignal(0, "SIGTERM"));
  process.on("SIGINT", () => handleSignal(0, "SIGINT"));

  process.on("uncaughtException", (error) => {
    logger.error(
      `Worker process ${process.pid} got an uncaught Exception`,
      error
    );
  });

  process.on("unhandledRejection", (reason, promise) => {
    logger.error(
      `Worker process ${process.pid} got an unhandled Promise Rejection`,
      reason,
      promise
    );
  });

  logger.info(`Worker process ${process.pid} started`);
};
