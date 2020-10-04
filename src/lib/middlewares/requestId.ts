import { Request, Response, NextFunction, RequestHandler } from "express";
import { nanoid } from "nanoid";

export const requestId = (): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const id = nanoid(10);
    req.requestId = id;
    res.requestId = id;
    next();
  };
};
