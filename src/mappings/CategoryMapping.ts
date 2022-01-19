import { Category } from "../entity/Category";
import { CategoryDTO, CategoryInputDTO } from "../dto/CategoryDTO";

export class CategoryMapper {
  public static dtoToEntity(dto: CategoryInputDTO): Category | null {
    if (!dto || !(Object.keys(dto).length !== 0)) return null;
    const category = new Category();
    category.name = dto.name;
    return category;
  }

  public static entityToDto(entity: Category): CategoryDTO | null {
    if (!entity || !(Object.keys(entity).length !== 0)) return null;
    const dto = new CategoryDTO();
    dto.id = entity.id;
    dto.name = entity.name;
    return dto;
  }
}
