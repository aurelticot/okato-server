/* eslint-disable @typescript-eslint/no-explicit-any */
import { TechnicalError } from "./TechnicalError";
import { ErrorCode } from "../types";

export class UnknownError extends TechnicalError {
  constructor(
    message: string,
    extension?: Record<string, any>,
    metadata?: Record<string, any>
  ) {
    super(ErrorCode.UNKNOWN, `Unknown Error: ${message}`, extension, metadata);
  }
}
