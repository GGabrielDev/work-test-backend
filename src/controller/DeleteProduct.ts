import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { Product } from "../entity/Product";

export async function DeleteProduct(req: Request, res: Response) {
  const manager = getMongoRepository(Product);
  const product = await manager.findOne(req.params.id);

  if (product) {
    try {
      await manager.delete(product);
      res.status(200).send("Product deleted susccesfully");
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(404).send("Product not found");
  }
}
