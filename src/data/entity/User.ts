import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import Joi from "joi";

@Unique(["username"])
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  username: string;

  @Column("varchar")
  salt: string;

  @Column("varchar")
  hash: string;

  @Column("text")
  profile: number;

  @Column()
  @CreateDateColumn()
  createdOn: Date;

  @Column()
  @UpdateDateColumn()
  updatedOn: Date;
}

export const UserValidator = Joi.object({
  username: Joi.string(),
  salt: Joi.string(),
  hash: Joi.string(),
  profile: Joi.number(),
});
