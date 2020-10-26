import { getLogger } from "../utils";
const logger = getLogger("server");

import { RequestHandler } from "express";
import cors from "cors";
import { config } from "../../config";

const { enableCORS, allowedDomains, nodeEnv } = config;

const checkedOrigins =
  nodeEnv === "development" && allowedDomains.length === 0
    ? undefined
    : allowedDomains;

export const corsMiddleware = (): RequestHandler => {
  if (!enableCORS) {
    logger.warn(`CORS disabled`);
  } else if (allowedDomains.length === 0) {
    logger.warn(`CORS no domain allowed`);
  } else {
    allowedDomains.forEach((domain) => {
      logger.info(`CORS allowed domain: ${domain.toString()}`);
    });
  }

  return cors({
    origin: enableCORS ? checkedOrigins : false,
    methods: ["GET", "HEAD", "POST", "DELETE", "OPTIONS"],
  });
};
