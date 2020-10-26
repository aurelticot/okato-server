import os from "os";

const numCPUs = os.cpus().length;

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 9000;

const concurrency: number = process.env.WEB_CONCURRENCY
  ? parseInt(process.env.WEB_CONCURRENCY)
  : numCPUs;

const nodeEnv: "production" | "development" | "test" =
  process.env.NODE_ENV || "development";

const environmentId: string = process.env.ENVIRONMENT_ID || "unknown";

const logLevel: string | undefined = process.env.LOG_LEVEL;

const enableRateLimit: boolean =
  process.env.ENABLE_RATE_LIMITE === "false" ? false : true;

const enableCORS: boolean = process.env.ENABLE_CORS === "false" ? false : true;

const allowedDomains: RegExp[] = process.env.ALLOWED_DOMAINS
  ? process.env.ALLOWED_DOMAINS.split(",").map((domain) => new RegExp(domain))
  : [];

export const config = {
  concurrency,
  port,
  nodeEnv,
  environmentId,
  logLevel,
  enableRateLimit,
  enableCORS,
  allowedDomains,
};
