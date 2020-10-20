import { FunctionalError } from "./FunctionalError";
import { ErrorCode } from "../types";

export class NotFoundError extends FunctionalError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, ...metadata: any[]) {
    super(ErrorCode.NOT_FOUND, `Not Found Error: ${message}`, metadata);
  }
}
