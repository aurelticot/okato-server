export enum ErrorCode {
  NOT_IMPLEMENTED = "NOT_IMPLEMENTED",
  NOT_FOUND = "NOT_FOUND",
  UNKNOWN = "UNKONWN",
  INVALID_ARGS = "INVALID_ARGS",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}

export enum TelemetryErrorTag {
  UNHANDLED_EXCEPTION = "UnhandledException",
  UNHANDLED_REJECTION = "UnhandledRejection",
  TECHNICAL = "Technical",
  FUNCTIONAL = "Functional",
}
