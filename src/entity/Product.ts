import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";
import { Category } from "./Category";

@Entity("products")
export class Product {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ unique: true })
  name: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  img: string;

  @Column(() => Category)
  category: Category;
}
