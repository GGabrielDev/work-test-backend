import { Request, Response } from "express";
import express = require("express");
import { getMongoManager } from "typeorm";
import * as jwt from "jsonwebtoken";
import { User } from "../entity/User";

export type JWTType = { userId: string };

const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = new User(email, password);
    const manager = getMongoManager();
    await manager.save(user);

    const token = jwt.sign({ userId: user.id }, "MY-SECRET-KEY");
    return res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Must provide e-mail and password" });
  }

  const manager = getMongoManager();
  const user = await manager.findOne(User, { email });

  if (!user) {
    return res.status(422).send({ error: "Invalid e-mail or password" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user.id }, "MY-SECRET-KEY");
    return res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid e-mail or password" });
  }
});

export default router;
