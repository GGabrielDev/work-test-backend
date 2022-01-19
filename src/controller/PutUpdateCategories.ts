import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { validateOrReject } from "class-validator";
import { CategoryMapper } from "../mappings/CategoryMapping";
import { Category } from "../entity/Category";

export async function PutUpdateCategories(req: Request, res: Response) {
  const manager = getMongoRepository(Category);
  const category = await manager.findOne(req.params.id);

  if (category) {
    const entity = CategoryMapper.dtoToEntity(req.body);
    if (entity === null) throw "Entity empty";
    await validateOrReject(entity).catch((err) => {
      throw err;
    });

    await manager.update(category, entity);
    res.status(200).send("Category updated susccesfully");
  } else {
    res.status(401).send("Category not found");
  }
}
