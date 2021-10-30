import { Client } from "raygun";
import { Message } from "raygun/build/types";
import { config } from "../../config";

const { appVersion, raygunAPIKey, envType } = config;

const telemetryClient = new Client().init({
  apiKey: raygunAPIKey || "local_dev",
  tags: [`env:${envType}`],
});

if (appVersion) {
  telemetryClient.setVersion(appVersion);
}

export const sendTelemetryError = (
  error: Error,
  customData?: any, // eslint-disable-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  callback?: ((err: Error | null) => void) | undefined,
  tags?: string[] | undefined
): Message => {
  return telemetryClient.send(error, customData, callback, undefined, tags);
};

// eslint-disable-next-line @typescript-eslint/unbound-method
export const telemetryMiddleware = telemetryClient.expressHandler;
