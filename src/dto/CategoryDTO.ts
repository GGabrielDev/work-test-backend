import { IsString, IsNotEmpty, IsAlpha, MaxLength } from "class-validator";
import { ObjectID } from "typeorm";

export class CategoryInputDTO {
  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  @MaxLength(128)
  name: string;
}

export class CategoryDTO {
  id: ObjectID;
  name: string;
}
