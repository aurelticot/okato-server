export class BadRequestError extends Error {
  constructor(message: string) {
    super(`BadRequestError: ${message}`);
  }
}
