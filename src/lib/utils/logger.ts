import { config } from "../../config";
import cluster from "cluster";
import winston, { createLogger, format, transports } from "winston";
import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";

export const isProdLogger = config.nodeEnv === "production";

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
    level: config.logLevel,
    format: format.combine(
      formatProcessID(),
      format.label({ label: name }),
      format.metadata({
        fillExcept: ["label", "level", "message", "processID"],
      }),
      format.errors({ stack: true }),
      format.json()
    ),
    transports: config.logtailSourceToken
      ? [
          new transports.Console(),
          new LogtailTransport(new Logtail(config.logtailSourceToken)),
        ]
      : [new transports.Console()],
  });
};

const getDevLogger = (name?: string): winston.Logger => {
  return createLogger({
    level: config.logLevel,
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
