import { EntitySchema } from "typeorm";

const schema = {
  name: "content",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    data: {
      type: "varchar",
      nullable: false,
    },
    contentTypeId: {
      type: "int",
      nullable: true,
    },
    createdByUserId: {
      type: "bool",
      nullable: false,
      default: false,
    },
    lastUpdatedByUserId: {
      type: "varchar",
      unique: true,
      nullable: false,
    },
    createdOn: {
      type: "varchar",
      nullable: true,
    },
    updatedOn: {
      type: "varchar",
      unique: true,
      nullable: false,
    },
  },
} as const;

export const Entity = new EntitySchema(schema);
