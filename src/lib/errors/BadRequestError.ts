import { FunctionalError } from "./FunctionalError";
import { ErrorCode } from "../types";

export class BadRequestError extends FunctionalError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, ...metadata: any[]) {
    super(ErrorCode.BAD_REQUEST, `Bad Request Error: ${message}`, metadata);
  }
}
