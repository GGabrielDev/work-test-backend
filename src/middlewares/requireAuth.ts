import { Request, Response, NextFunction } from "express";
import { getMongoManager } from "typeorm";
import jwt = require("jsonwebtoken");
import { User } from "../entity/User";

module.exports = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;

  if (!auth) {
    res.status(401).send({ error: "You must be logged in" });
  } else {
    const token = auth.replace("Bearer ", "");

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      {
        algorithms: ["HS256"],
      },
      async (err, data) => {
        if (err) {
          res.status(401).send({ error: "You must be logged in" });
        }

        const manager = getMongoManager();
        const user = manager.findByIds(User, [data]);
        req.body.user = user;

        next();
      }
    );
  }
};
