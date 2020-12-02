/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionalError } from "./FunctionalError";
import { ErrorCode } from "../types";

export class InvalidArgsError extends FunctionalError {
  constructor(
    message: string,
    invalidArgs?: Record<string, any>,
    metadata?: Record<string, any>
  ) {
    super(
      ErrorCode.INVALID_ARGS,
      `Invalid Arguments Error: ${message}`,
      { invalidArgs },
      metadata
    );
  }
}
