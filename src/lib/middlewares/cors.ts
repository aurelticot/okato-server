import { getLogger } from "../utils";
const logger = getLogger("server");

import { RequestHandler } from "express";
import cors from "cors";
import { config } from "../../config";

export const corsMiddleware = (): RequestHandler => {
  const { enableCORS, allowedDomains, nodeEnv } = config;
  if (allowedDomains.length === 0) {
    logger.warn(`CORS no domain allowed`);
  } else {
    allowedDomains.forEach((domain) => {
      logger.info(`CORS allowed domain: ${domain.toString()}`);
    });
  }
  const checkedOrigins =
    nodeEnv === "development" && allowedDomains.length === 0
      ? undefined
      : allowedDomains;

  return cors({
    origin: enableCORS ? checkedOrigins : false,
    methods: ["GET", "HEAD", "POST", "DELETE", "OPTIONS"],
  });
};
