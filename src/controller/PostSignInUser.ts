import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { sign } from "jsonwebtoken";
import { User } from "../entity/User";

export type JWTType = { userId: string };

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
      const token = sign({ userId: user.id }, "MY-SECRET-KEY");
      res.send({ token });
    } catch (err) {
      res.status(422).send({ error: "Invalid e-mail or password" });
    }
  }
}
