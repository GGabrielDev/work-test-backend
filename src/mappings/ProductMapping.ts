import { Product } from "../entity/Product";
import { ProductDTO, ProductInputDTO } from "../dto/ProductDTO";

export class ProductMapper {
  public static dtoToEntity(dto: ProductInputDTO): Product | null {
    if (!dto || !(Object.keys(dto).length !== 0)) return null;
    const product = new Product();
    product.name = dto.name;
    product.stock = dto.stock;
    product.price = dto.price;
    product.img = dto.img;
    product.category = dto.category;
    return product;
  }

  public static entityToDto(entity: Product): ProductDTO | null {
    if (!entity || !(Object.keys(entity).length !== 0)) return null;
    const dto = new ProductDTO();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.stock = entity.stock;
    dto.price = entity.price;
    dto.img = entity.img;
    dto.category = entity.category;
    return dto;
  }
}
