import raygun from "raygun";
import { config } from "../../config";

const { appVersion, raygunAPIKey } = config;

export const crashReporter = new raygun.Client().init({
  apiKey: raygunAPIKey || "local_dev",
});

if (appVersion) {
  crashReporter.setVersion(appVersion);
}

export enum CrashReporterTag {
  UNHANDLED_EXCEPTION = "UnhandledException",
  UNHANDLED_REJECTION = "UnhandledRejection",
  TECHNICAL = "Technical",
  FUNCTIONAL = "Functional",
}
