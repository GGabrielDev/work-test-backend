import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import jwt = require("jsonwebtoken");
import { User } from "../entity/User";

export async function PostSignInUser(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: "Must provide e-mail and password" });
  }

  const manager = getMongoManager();
  const user = await manager.findOne(User, { email });

  if (!user) {
    res.status(422).send({ error: "Invalid e-mail or password" });
  } else {
    try {
      await user.comparePassword(password);
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "14d",
          algorithm: "HS256",
        }
      );
      res.send({ token });
    } catch (err) {
      res.status(422).send({ error: "Invalid e-mail or password" });
    }
  }
}
