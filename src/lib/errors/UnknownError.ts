import { TechnicalError } from "./TechnicalError";
import { ErrorCode } from "../types";

export class UnknownError extends TechnicalError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, ...metadata: any[]) {
    super(ErrorCode.UNKNOWN, `Unknown Error: ${message}`, metadata);
  }
}
