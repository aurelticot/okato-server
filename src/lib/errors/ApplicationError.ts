import { ErrorCode } from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class ApplicationError extends Error {
  readonly code: ErrorCode;
  readonly metadata?: any[];

  constructor(code: ErrorCode, message: string, metadata?: any[]) {
    super(message);
    this.code = code;
    this.metadata = metadata;
  }
}
