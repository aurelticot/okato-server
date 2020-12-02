/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionalError } from "./FunctionalError";
import { ErrorCode } from "../types";

export class NotFoundError extends FunctionalError {
  constructor(
    message: string,
    extension?: Record<string, any>,
    metadata?: Record<string, any>
  ) {
    super(
      ErrorCode.NOT_FOUND,
      `Not Found Error: ${message}`,
      extension,
      metadata
    );
  }
}
