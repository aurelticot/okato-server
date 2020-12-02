import { config } from "../../config";
import cluster from "cluster";
import winston, { createLogger, format, transports } from "winston";

export const isProdLogger = config.nodeEnv === "production";
const logLevel = config.logLevel
  ? config.logLevel
  : isProdLogger
  ? "info"
  : "debug";

const levelPads: { [key: string]: string } = {
  error: "  ",
  warn: "   ",
  info: "   ",
  verbose: "",
  debug: "  ",
  silly: "  ",
};

const formatProcessID = format((info) => {
  info.processID = cluster.isMaster
    ? `main-${process.pid}`
    : `worker-${process.pid}`;
  return info;
});

const formatLevelPads = format((info) => {
  info.pads = levelPads[info.level];
  return info;
});

const formatConsoleOutput = () => {
  return format.printf(
    ({
      timestamp,
      level,
      pads,
      label,
      message,
      processID,
      metadata,
    }: winston.Logform.TransformableInfo) => {
      let metadataString = "";
      if (
        Object.keys(metadata).length !== 0 &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        metadata?.constructor === Object
      ) {
        metadataString = ` - metadata: ${JSON.stringify(metadata)}`;
      }
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `${timestamp} ${level}${pads} [${label}@${processID}]: ${message}${metadataString}`;
    }
  );
};

const getProdLogger = (name?: string): winston.Logger => {
  return createLogger({
    level: logLevel,
    transports: [
      new transports.Console({
        format: format.combine(
          format.timestamp(),
          formatProcessID(),
          format.label({ label: name }),
          format.metadata({
            fillExcept: ["timestamp", "label", "level", "message", "processID"],
          }),
          format.errors({ stack: true }),
          format.json()
        ),
      }),
    ],
  });
};

const getDevLogger = (name?: string): winston.Logger => {
  return createLogger({
    level: logLevel,
    transports: [
      new transports.Console({
        format: format.combine(
          format.timestamp(),
          formatProcessID(),
          formatLevelPads(),
          format.label({ label: name }),
          format.metadata({
            fillExcept: [
              "timestamp",
              "label",
              "level",
              "message",
              "processID",
              "pads",
            ],
          }),
          format.errors({ stack: true }),
          format.colorize(),
          formatConsoleOutput()
        ),
      }),
    ],
  });
};

export const getLogger = (name: string): winston.Logger => {
  return isProdLogger ? getProdLogger(name) : getDevLogger(name);
};
