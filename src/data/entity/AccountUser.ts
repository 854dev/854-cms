import { Entity, EntitySchema } from "typeorm";
import { createdUpdated } from "data/entity/common";

const schema: EntitySchema["options"] = {
  name: "account_user",
  columns: {
    id: {
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
    ...createdUpdated,
  },
} as const;

export const AccountUser = new EntitySchema(schema);
