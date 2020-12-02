/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorCode } from "../types";
import { GraphQLError } from "./GraphQLError";

export class GraphQLNotimplementedError extends GraphQLError {
  constructor(message: string, extension: Record<string, any>) {
    super(
      ErrorCode.NOT_IMPLEMENTED,
      `Not Implemented Error: ${message}`,
      extension
    );
  }
}
