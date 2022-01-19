import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { Product } from "../entity/Product";

export async function GetProducts(req: Request, res: Response) {
  if (req) {
    const manager = getMongoManager();
    const products = manager.find(Product);
    res.json(products);
  } else {
    res.status(400).send("Bad Request!");
  }
}
