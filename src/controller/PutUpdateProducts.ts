import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { validateOrReject } from "class-validator";
import { Product } from "../entity/Product";
import { ProductMapper } from "../mappings/ProductMapping";

export async function PutUpdateProducts(req: Request, res: Response) {
  const manager = getMongoRepository(Product);
  const product = await manager.findOne(req.params.id);

  if (product) {
    const entity = ProductMapper.dtoToEntity(req.body);
    if (entity === null) throw "Entity empty";
    await validateOrReject(entity).catch((err) => {
      throw err;
    });

    await manager.update(product, entity);
    res.status(200).send("Product updated susccesfully");
  } else {
    res.status(401).send("Product not found");
  }
}
