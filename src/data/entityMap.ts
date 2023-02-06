import { User, UserValidator } from "data/entity/User";
// import { Content, ContentValidator } from "data/entity/Content";

export const entityMap = {
  User: User,
  // Content: Content,
} as const;

export const validatorMap = {
  User: UserValidator,
  // Content: ContentValidator,
} as const;

export type EntityMap = typeof entityMap;

// export type EntityMap = {
//   User: User;
//   // Content: Content;
// };
