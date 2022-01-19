import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";

@Entity("categories")
export class Category {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ unique: true })
  name: string;
}
