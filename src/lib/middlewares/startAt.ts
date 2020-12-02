import { Request, Response, NextFunction, RequestHandler } from "express";

export const startAt = (): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const startAtValue = process.hrtime();
    req.startAt = startAtValue;
    res.startAt = startAtValue;
    next();
  };
};
