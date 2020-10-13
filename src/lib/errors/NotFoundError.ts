export class NotFoundError extends Error {
  constructor(message: string) {
    super(`NotFoundError: ${message}`);
  }
}
