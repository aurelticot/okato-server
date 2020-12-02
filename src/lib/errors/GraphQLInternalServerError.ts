import { ErrorCode } from "../types";
import { GraphQLError } from "./GraphQLError";

export class GraphQLInternalServerError extends GraphQLError {
  constructor() {
    super(
      ErrorCode.INTERNAL_SERVER_ERROR,
      `Internal Server Error: Something went wrong!`
    );
  }
}
