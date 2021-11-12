import os from "os";

const appName: string = process.env.npm_package_name || "undefined";
const appVersion: string = process.env.npm_package_version || "undefined";

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 9000;

const numCPUs = os.cpus().length;
const concurrency: number = process.env.WEB_CONCURRENCY
  ? parseInt(process.env.WEB_CONCURRENCY)
  : numCPUs;

const nodeEnv = process.env.NODE_ENV || "development";
const envType: string = process.env.ENV_TYPE || "unknown";
const envId: string = process.env.ENV_ID || "unknown";

const logLevel =
  process.env.LOG_LEVEL || (nodeEnv === "production" ? "info" : "debug");

const enableRateLimit = !(process.env.ENABLE_RATE_LIMITE === "false");
const RATE_LIMIT_DEFAULT = 10;
let rateLimitation = RATE_LIMIT_DEFAULT;
try {
  rateLimitation = process.env.RATE_LIMIT
    ? parseInt(process.env.RATE_LIMIT)
    : RATE_LIMIT_DEFAULT;
} catch (error) {
  rateLimitation = RATE_LIMIT_DEFAULT;
}

const enableCORS = !(process.env.ENABLE_CORS === "false");
const allowedDomains: RegExp[] = process.env.ALLOWED_DOMAINS
  ? process.env.ALLOWED_DOMAINS.split(",").map((domain) => new RegExp(domain))
  : [];

const raygunAPIKey = process.env.RAYGUN_API_KEY;

const logtailSourceToken = process.env.LOGTAIL_SOURCE_TOKEN;

export const config = {
  appName,
  appVersion,
  concurrency,
  port,
  nodeEnv,
  envType,
  envId,
  logLevel,
  enableRateLimit,
  rateLimitation,
  enableCORS,
  allowedDomains,
  raygunAPIKey,
  logtailSourceToken,
};
