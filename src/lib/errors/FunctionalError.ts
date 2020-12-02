/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApplicationError } from "./ApplicationError";
import { ErrorCode } from "../types";

export abstract class FunctionalError extends ApplicationError {
  constructor(
    code: ErrorCode,
    message: string,
    extension?: Record<string, any>,
    metadata?: Record<string, any>
  ) {
    super(code, message, extension, metadata);
  }
}
