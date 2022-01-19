import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { Category } from "../entity/Category";

export async function DeleteCategory(req: Request, res: Response) {
  const manager = getMongoManager();
  const results = manager.delete(Category, req.params.id);
  res.send(results);
}
