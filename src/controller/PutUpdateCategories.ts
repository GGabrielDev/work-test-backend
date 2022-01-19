import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { Category } from "../entity/Category";

export async function PutUpdateCategories(req: Request, res: Response) {
  const manager = getMongoManager();
	const categoty = await manager.findOne(Category, req.params.id);

  if (categoty) {
    manager.merge(req.body, categoty);
    const results = await manager.save(categoty);
    res.send(results);
  } else {
    res.status(401).send("Category not found.");
  }
}
