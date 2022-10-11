import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entities/Post";
import { Reaction } from "./entities/Reaction";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  username: "postgres",
  password: "postgres",
  database: "meaningful",
  synchronize: true,
  logging: true,
  entities: [User, Post, Reaction],
});
