import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { Category } from "../entity/Category";
import { Product } from "../entity/Product";

export async function GetProductsByCategory(req: Request, res: Response) {
  const categoryManager = getMongoRepository(Category);
  const category = await categoryManager.findOne(req.params.categoryId);

  if (category) {
    const productManager = getMongoRepository(Product);
    const products = await productManager.find();
    const results = products.filter(
      (product) => product.category.name == category.name
    );

    console.log(results);

    res.status(200).json(products);
  } else {
    res.status(404).send("Category not found");
  }
}
