import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { Category } from "../entity/Category";

export async function GetCategories(req: Request, res: Response) {
  if (req) {
    const manager = getMongoRepository(Category);
    const categories = await manager.find();
    res.status(200).json(categories);
  } else {
    res.status(400).send("Bad Request");
  }
}
