import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { Category } from "../entity/Category";
import { Product } from "../entity/Product";

export async function DeleteCategory(req: Request, res: Response) {
  const manager = getMongoRepository(Category);
  const category = await manager.findOne(req.params.id);

  if (category) {
    const productManager = getMongoRepository(Product);
    const products = await productManager.find();
    const results = products.filter(
      (product) => product.category.name == category.name
    );

    if (!(results.length > 0)) {
      try {
        await manager.delete(category);
        res.status(200).send("Category deleted susccesfully");
      } catch (err) {
        res.status(400).send(err);
      }
    } else {
      res.status(403).send("Categories with products cannot be deleted");
    }
  } else {
    res.status(404).send("Category not found");
  }
}
