import { getLogger } from "../../../lib/utils";
const logger = getLogger("graphql");

import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from "apollo-server-plugin-base";

export const graphqlLoggingPlugin: ApolloServerPlugin = {
  requestDidStart: (): GraphQLRequestListener => {
    return {
      didResolveOperation: (requestContext) => {
        logger.info(
          `GraphQL server received request operation with name: ${
            requestContext.request.operationName || "undefined"
          }`
        );
      },
    };
  },
};
