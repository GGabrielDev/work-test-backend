import {
  Entity,
  ObjectIdColumn,
  Column,
  ObjectID,
  OneToOne,
  JoinColumn,
} from "typeorm";
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

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;

  constructor(
    name: string,
    stock: number,
    price: number,
    img: string,
    category: Category
  ) {
    this.name = name;
    this.stock = stock;
    this.price = price;
    this.img = img;
    this.category = category;
  }
}
