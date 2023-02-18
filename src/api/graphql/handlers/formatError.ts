import { getLogger } from "../../../lib/utils";
const logger = getLogger("graphql");
import { GraphQLError, GraphQLFormattedError } from "graphql";
import {
  FunctionalError,
  GraphQLError as AppGraphQLError,
  GraphQLInternalServerError,
} from "../../../lib/errors";

export const formatError = (error: GraphQLError): GraphQLFormattedError => {
  const { originalError } = error;

  if (originalError instanceof AppGraphQLError) {
    logger.info(`GraphQL server caught GraphQL-formatted error.`);
    logger.verbose(`Sending the GraphQL-fromatted error to the client.`);
    return error;
  }

  logger.warn("GraphQL server caught a non-GraphQL error.");

  if (originalError instanceof FunctionalError) {
    logger.error(
      `Functional error unhandled before GraphQL response.`,
      error.originalError
    );

    logger.verbose(`Sending the GraphQL-fromatted error to the client.`);
    return AppGraphQLError.createFromError(originalError);
  }

  logger.error(
    `Technical or unkown error uncaught before GraphQL response.`,
    originalError
  );

  logger.warn("Sending a GraphQLInternalServerError to the client.");
  return new GraphQLInternalServerError();
};
