import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { AppDataSource } from "./data-source";
import { UserResolver } from "./resolvers/User";

const main = async () => {
  await AppDataSource.initialize();

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server running on port 4000");
  });
};

main().catch((err) => console.error(err));
