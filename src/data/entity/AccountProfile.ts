import { Entity, EntitySchema } from "typeorm";
import { createdUpdated } from "data/entity/common";

const schema: EntitySchema["options"] = {
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
    ...createdUpdated,
  },
  relations: {
    account_user: {
      type: "one-to-one",
      target: "account_user",
      joinColumn: {
        name: "user_id",
        referencedColumnName: "id",
      },
      cascade: true,
    },
  },
} as const;

export const AccountProfile = new EntitySchema(schema);
