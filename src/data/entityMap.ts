import { User } from "data/entity/User";
import { Content } from "data/entity/Content";

const entityMap = {
  User: User,
  Content: Content,
} as const;

export default entityMap;

export type EntityMap = {
  User: User;
  Content: Content;
};
