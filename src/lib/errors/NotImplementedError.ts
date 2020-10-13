export class NotImplementedError extends Error {
  constructor(message: string) {
    super(`NotImplementedError: ${message}`);
  }
}
