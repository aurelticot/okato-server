declare namespace NodeJS {
  export interface ProcessEnv {
    PORT?: string;
    WEB_CONCURRENCY?: string;
    NODE_ENV?: "production" | "development" | "test";
    ENVIRONMENT_ID?: string;
    LOG_LEVEL?: string;
    ALLOWED_DOMAIN?: string;
  }
}
