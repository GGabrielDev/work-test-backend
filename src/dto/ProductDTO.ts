import {
  IsString,
  IsAlpha,
  IsNumber,
  MaxLength,
  IsNotEmpty,
  IsObject,
} from "class-validator";
import { ObjectID } from "typeorm";
import { Category } from "../entity/Category";

export class ProductInputDTO {
  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  @MaxLength(128)
  name: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  img: string;

  @IsObject()
  @IsNotEmpty()
  category: Category;
}

export class ProductDTO {
  id: ObjectID;
  name: string;
  stock: number;
  price: number;
  img: string;
  category: Category;
}
