import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./data.sqlite",
  synchronize: true,
  logging: false,
  entities: ["./entity/*.ts"],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
