import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { sign } from "jsonwebtoken";
import { User } from "../entity/User";

export type JWTType = { userId: string };

export async function PostSignUpUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = new User(email, password);
    const manager = getMongoManager();
    await manager.save(user);

    const token = sign({ userId: user.id }, "MY-SECRET-KEY");
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
}
