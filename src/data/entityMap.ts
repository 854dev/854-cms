import { AccountUser } from "data/entity/AccountUser";
import { AccountProfile } from "./entity/AccountProfile";

export const entityMap = { AccountUser, AccountProfile } as const;

// export const validatorMap = {
//   User: UserValidator,
//   // Content: ContentValidator,
// } as const;

export type EntityMap = typeof entityMap;

// export type EntityMap = {
//   User: User;
//   // Content: Content;
// };
