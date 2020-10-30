import os from "os";

const appName: string = process.env.npm_package_name || "undefined";
const appVersion: string = process.env.npm_package_version || "undefined";

const numCPUs = os.cpus().length;

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 9000;

const concurrency: number = process.env.WEB_CONCURRENCY
  ? parseInt(process.env.WEB_CONCURRENCY)
  : numCPUs;

const nodeEnv: "production" | "development" | "test" =
  process.env.NODE_ENV || "development";

const environmentId: string = process.env.ENVIRONMENT_ID || "unknown";

const logLevel: string | undefined = process.env.LOG_LEVEL;

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

export const config = {
  appName,
  appVersion,
  concurrency,
  port,
  nodeEnv,
  environmentId,
  logLevel,
  enableRateLimit,
  rateLimitation,
  enableCORS,
  allowedDomains,
  raygunAPIKey,
};
