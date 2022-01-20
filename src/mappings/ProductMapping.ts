import { ObjectID } from "typeorm";
import { Product } from "../entity/Product";
import { ProductDTO, ProductInputDTO } from "../dto/ProductDTO";
import { CategoryMapper } from "./CategoryMapping";

export class ProductMapper {
  public static dtoToEntity(dto: ProductInputDTO): Product | null {
    if (!dto || !(Object.keys(dto).length !== 0)) return null;
    const product = new Product();
    const category = CategoryMapper.dtoToEntity(dto.category);

    product.name = dto.name;
    product.stock = dto.stock;
    product.price = dto.price;
    product.img = dto.img;
    if (!(!category || !(Object.keys(category).length !== 0)))
      product.category = category;
    return product;
  }

  public static entityToDto(entity: Product): ProductDTO | null {
    if (!entity || !(Object.keys(entity).length !== 0)) return null;
    const dto = new ProductDTO();
    const category = CategoryMapper.dtoToEntity(entity.category);

    dto.id = entity.id as ObjectID;
    dto.name = entity.name;
    dto.stock = entity.stock;
    dto.price = entity.price;
    dto.img = entity.img;
    if (!(!category || !(Object.keys(category).length !== 0)))
      dto.category = category;
    return dto;
  }
}
