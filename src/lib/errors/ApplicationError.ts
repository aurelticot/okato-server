/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorCode } from "../types";

export abstract class ApplicationError extends Error {
  readonly code: ErrorCode;
  extension?: Record<string, any>;
  metadata?: Record<string, any>;

  constructor(
    code: ErrorCode,
    message: string,
    extension?: Record<string, any>,
    metadata?: Record<string, any>
  ) {
    super(message);
    this.code = code;
    this.extension = extension;
    this.metadata = metadata;
  }
}
