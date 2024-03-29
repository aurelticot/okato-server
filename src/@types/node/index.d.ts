declare namespace NodeJS {
  export interface ProcessEnv {
    PORT?: string;
    WEB_CONCURRENCY?: string;
    NODE_ENV?: "production" | "development" | "test";
    ENV_TYPE?: string;
    ENV_ID?: string;
    LOG_LEVEL?: "error" | "warn" | "info" | "verbose" | "debug" | "silly";
    ENABLE_RATE_LIMITE?: "true" | "false";
    RATE_LIMIT?: string;
    ENABLE_CORS?: "true" | "false";
    ALLOWED_DOMAINS?: string;
  }
}
