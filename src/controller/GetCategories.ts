import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { Category } from "../entity/Category";

export async function GetCategories(req: Request, res: Response) {
  if (req) {
    const manager = getMongoManager();
    const categories = manager.find(Category);
    res.json(categories);
  } else {
    res.status(400).send("Bad Request!");
  }
}
