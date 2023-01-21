import { DataSource } from "typeorm";
import entityMap from "./entityMap";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./data.sqlite",
  synchronize: true,
  logging: false,
  entities: Object.values(entityMap),
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
