import Joi from "joi";
import { Entity, EntitySchema } from "typeorm";

const schema = {
  name: "user",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    email: {
      type: "varchar",
      unique: true,
      nullable: false,
    },
    password: {
      type: "varchar",
      nullable: false,
    },
    username: {
      type: "varchar",
      unique: true,
      nullable: false,
    },
    first_name: {
      type: "varchar",
      nullable: true,
    },
    last_name: {
      type: "varchar",
      nullable: true,
    },
    is_superuser: {
      type: "boolean",
      nullable: false,
      default: false,
    },
    is_staff: {
      type: "boolean",
      nullable: false,
      default: false,
    },
    last_login: {
      type: "varchar",
      nullable: true,
    },
    is_active: {
      type: "boolean",
      nullable: false,
      default: true,
    },
    date_joined: {
      type: "varchar",
      createDate: true,
      default: () => "CURRENT_TIMESTAMP",
    },
  },
} as const;

export const UserValidator = Joi.object({
  email: Joi.string().email(),
  first_name: Joi.string().max(100),
  last_name: Joi.string().max(100),
});

export const User = new EntitySchema(schema);
