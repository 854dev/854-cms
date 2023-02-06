import { Entity, EntitySchema } from "typeorm";
import { createdUpdated } from "data/entity/common";

const schema: EntitySchema["options"] = {
  name: "account_profile",
  columns: {
    id: {
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
    ...createdUpdated,
  },
  relations: {
    categories: {
      type: "one-to-one",
      target: "account_user",
    },
  },
} as const;

export const AccountProfile = new EntitySchema(schema);
