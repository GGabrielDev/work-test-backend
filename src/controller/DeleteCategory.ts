import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { Category } from "../entity/Category";

export async function DeleteCategory(req: Request, res: Response) {
  try {
    const manager = getMongoRepository(Category);
    await manager.delete(req.params.id);
    res.status(200).send("Category deleted susccesfully");
  } catch (err) {
    res.status(400).send(err);
  }
}
