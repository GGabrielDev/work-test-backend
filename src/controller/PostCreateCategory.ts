import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { validateOrReject } from "class-validator";

import { Category } from "../entity/Category";
import { CategoryMapper } from "../mappings/CategoryMapping";

export async function PostCreateCategory(req: Request, res: Response) {
  if (req.body) {
    try {
      const entity = CategoryMapper.dtoToEntity(req.body);
      if (entity === null) throw "Entity empty";
      await validateOrReject(entity).catch((err) => {
        throw err;
      });

      const manager = getMongoRepository(Category);
      const category = manager.create(entity);
      const results = await manager.save(category);

      res.status(201).send(results);
    } catch (err) {
      res.status(401).send(`Bad request: ${err}`);
    }
  } else {
    res.status(400).send("Empty request body");
  }
}
