/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorCode } from "../types";
import { GraphQLError } from "./GraphQLError";

export class GraphQLInvalidArgsError extends GraphQLError {
  constructor(
    message: string,
    invalidArgs: Record<string, any>,
    extension?: Record<string, any>
  ) {
    super(ErrorCode.INVALID_ARGS, `Invalid Arguments Error: ${message}`, {
      ...extension,
      invalidArgs,
    });
  }
}
