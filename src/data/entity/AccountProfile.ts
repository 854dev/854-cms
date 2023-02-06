import { Entity, EntitySchema } from "typeorm";

const schema = {
  name: "account_profile",
  columns: {
    user_id: {
      type: "int",
      primary: true,
      generated: true,
    },
    birthday: {
      type: "varchar",
      nullable: true,
    },
    email: {
      type: "varchar",
      unique: true,
      nullable: true,
    },
    first_name: {
      type: "varchar",
      nullable: true,
    },
    last_name: {
      type: "varchar",
      nullable: true,
    },
  },
} as const;

export const AccountProfile = new EntitySchema(schema);
