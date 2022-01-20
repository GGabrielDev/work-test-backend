import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { Product } from "../entity/Product";

export async function GetProducts(req: Request, res: Response) {
  if (req) {
    const manager = getMongoRepository(Product);
    const products = await manager.find();
    res.status(200).json(products);
  } else {
    res.status(400).send("Bad Request!");
  }
}
