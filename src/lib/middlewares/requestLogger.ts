import { getLogger, isProdLogger } from "../utils";
const logger = getLogger("request");

import { Request, Response, NextFunction, RequestHandler } from "express";
import onHeaders from "on-headers";

export const requestLogger = (): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const method = req.method;
    const url = `${req.baseUrl}${req.path}`;
    const params = req.params;
    const query = req.query;
    const requestID = req.requestId || "";

    const requestLogMessage = `Receiving request ${requestID} ${method}: ${url}`;
    const requestLogMetadata = isProdLogger
      ? { requestID, method, url, query, params }
      : { query, params };

    logger.info(requestLogMessage, requestLogMetadata);

    onHeaders(res, () => {
      const responseRequestID = res.requestId || "";
      const startAt = res.startAt;
      let responseTime = undefined;

      if (startAt) {
        const diff = process.hrtime(startAt);
        responseTime = {
          duration: (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(3),
          unit: "ms",
        };
      }

      const formattedResponseTime = responseTime
        ? ` in ${responseTime.duration}${responseTime.unit}`
        : "";
      const status = res.statusCode;

      const responseLogMessage = `Responding request ${responseRequestID} ${method}: ${url} with status ${status}${formattedResponseTime}`;
      const responseLogMetadata = isProdLogger
        ? {
            requestID: responseRequestID,
            method,
            url,
            query,
            params,
            status,
            responseTime,
          }
        : { query, params };

      logger.info(responseLogMessage, responseLogMetadata);
    });

    next();
  };
};
