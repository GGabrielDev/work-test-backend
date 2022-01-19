import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";

export interface CategoryDTO {
  id: ObjectID;
  name: string;
}

@Entity("categories")
export class Category {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ unique: true })
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
