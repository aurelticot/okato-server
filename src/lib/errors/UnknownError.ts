export class UnknownError extends Error {
  constructor(message: string) {
    super(`UnknownError: ${message}`);
  }
}
