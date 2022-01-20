import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { validateOrReject } from "class-validator";

import { Product } from "../entity/Product";
import { ProductMapper } from "../mappings/ProductMapping";

export async function PostCreateProduct(req: Request, res: Response) {
  if (req.body) {
    try {
      const entity = ProductMapper.dtoToEntity(req.body);
      if (entity === null) throw "Entity empty";
      await validateOrReject(entity).catch((err) => {
        throw err;
      });

      const manager = getMongoRepository(Product);
      const product = await manager.create(entity);
      const results = await manager.save(product);

      res.status(201).send(results);
    } catch (err) {
      res.status(400).send(`Bad request: ${err}`);
    }
  } else {
    res.status(400).send("Empty	request body");
  }
}
