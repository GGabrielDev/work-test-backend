import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { sign } from "jsonwebtoken";
import { User } from "../entity/User";

export async function PostSignUpUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = new User(email, password);
    const manager = getMongoManager();
    await manager.save(user);

    const token = sign(user.id, process.env.JWT_SECRET as string, {
      expiresIn: "14d",
      algorithm: "HS256",
    });
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
}
