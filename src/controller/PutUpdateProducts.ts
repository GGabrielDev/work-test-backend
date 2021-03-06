import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { Product } from "../entity/Product";

export async function PutUpdateProducts(req: Request, res: Response) {
  const manager = getMongoRepository(Product);
  const product = await manager.findOne(req.params.id);

  if (product) {
    await manager.update(product, req.body);
    res.status(200).send("Product updated susccesfully");
  } else {
    res.status(404).send("Product not found");
  }
}
