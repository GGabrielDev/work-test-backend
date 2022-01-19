import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { Category } from "../entity/Category";

export async function PostCreateCategory(req: Request, res: Response) {
  if (req.body) {
    try {
      const manager = getMongoManager();
      const category = await manager.create(Category, req.body);
      const results = await manager.save(category);
      res.status(201).send(results);
    } catch (err) {
      res.status(400).send("Bad request");
    }
  } else {
    res.status(204).send("Empty request body");
  }
}
