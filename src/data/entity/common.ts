import { EntitySchemaOptions } from "typeorm";

export const createdUpdated: EntitySchemaOptions<any>["columns"] = {
  created_at: {
    type: "varchar",
    createDate: true,
    default: () => "CURRENT_TIMESTAMP",
  },
  updated_at: {
    type: "varchar",
    updateDate: true,
    nullable: true,
    default: () => null,
  },
};
