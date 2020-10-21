import { ApplicationError } from "./ApplicationError";
import { ErrorCode } from "../types";

export abstract class TechnicalError extends ApplicationError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(code: ErrorCode, message: string, metadata?: any[]) {
    super(code, message, metadata);
  }
}
