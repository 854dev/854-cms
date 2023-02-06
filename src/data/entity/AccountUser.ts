import { Entity, EntitySchema } from "typeorm";

const schema = {
  name: "account_user",
  columns: {
    user_id: {
      type: "int",
      primary: true,
      generated: true,
    },
    username: {
      type: "varchar",
      unique: true,
      nullable: false,
    },
    password: {
      type: "varchar",
      nullable: false,
    },
    date_joined: {
      type: "varchar",
      createDate: true,
      default: () => "CURRENT_TIMESTAMP",
    },
  },
} as const;

export const AccountUser = new EntitySchema(schema);
