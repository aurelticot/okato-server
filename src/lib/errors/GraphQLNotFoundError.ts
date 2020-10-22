/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorCode } from "../types";
import { GraphQLError } from "./GraphQLError";

export class GraphQLNotFoundError extends GraphQLError {
  constructor(message: string, extension: Record<string, any>) {
    super(ErrorCode.NOT_FOUND, `Not Found Error: ${message}`, extension);
  }
}
