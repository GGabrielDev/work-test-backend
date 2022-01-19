import { Request, Response } from "express";
import { getMongoManager } from "typeorm";
import { Product } from "../entity/Product";

export async function PostCreateProduct(req: Request, res: Response) {
  const manager = getMongoManager();
  const product = await manager.create(Product, req.body);
  const results = await manager.save(product);
  res.send(results);
}
