import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  BeforeInsert,
} from "typeorm";
import bcrypt = require("bcrypt");

@Entity("users")
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  @BeforeInsert()
  hashedPassword() {
    if (!this.password) {
      return;
    }

    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return;
      }

      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          return;
        }
        this.password = hash;
      });
    });
  }

  public comparePassword(candidatePassword: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        return err ? reject(err) : !isMatch ? reject(false) : resolve(true);
      });
    });
  }
}
