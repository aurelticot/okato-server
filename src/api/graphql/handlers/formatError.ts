import { getLogger } from "../../../lib/utils";
const logger = getLogger("graphql");

import { GraphQLError, GraphQLFormattedError } from "graphql";
import {
  FunctionalError,
  GraphQLError as AppGraphQLError,
  GraphQLInternalServerError,
} from "../../../lib/errors";

export const formatError = (error: GraphQLError): GraphQLFormattedError => {
  logger.debug("Formatting GraphQL error");

  const { originalError } = error;
  if (originalError instanceof AppGraphQLError) {
    logger.debug("formatError: original error instance of GraphQL");
    return error;
  } else if (originalError instanceof FunctionalError) {
    logger.debug(
      "formatError: returning GraphQLError created from original error"
    );
    return AppGraphQLError.createFromError(originalError);
  }
  logger.debug("formatError: returning GraphQLInternalServerError");
  return new GraphQLInternalServerError();
};
