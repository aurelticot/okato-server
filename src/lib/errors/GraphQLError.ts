/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorCode } from "../types";
import { ApolloError } from "apollo-server-express";
import { ApplicationError } from "./ApplicationError";
import { TechnicalError } from "./TechnicalError";

export class GraphQLError extends ApolloError {
  static createFromError(error: ApplicationError): GraphQLError {
    if (error instanceof TechnicalError) {
      return new GraphQLError(
        ErrorCode.INTERNAL_SERVER_ERROR,
        `Internal Server Error: Something went wrong!`
      );
    }
    const graphqlError = new GraphQLError(
      error.code,
      error.message,
      error.extension
    );
    graphqlError.stack = error.stack;
    return graphqlError;
  }

  constructor(
    code: ErrorCode,
    message: string,
    extension?: Record<string, any>
  ) {
    super(message, code, extension);
  }
}
