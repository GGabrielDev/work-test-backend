import { Request, Response, NextFunction } from "express";

module.exports = (req: Request, res: Response, next: NextFunction) => {
  if (req) next();
  else res.status(400).send("Bad Request");
};
