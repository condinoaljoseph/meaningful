import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { AppDataSource } from "./data-source";
import { UserResolver } from "./resolvers/User";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import { COOKIE_NAME, __prod__ } from "./constants";
import { PostResolver } from "./resolvers/post";
import { ReactionResolver } from "./resolvers/reaction";
import cors from "cors";

const main = async () => {
  const redis = new Redis();
  const RedisStore = connectRedis(session);

  await AppDataSource.initialize();

  const app = express();

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works on https
      },
      saveUninitialized: true,
      secret: "ayaw boss",
      resave: false,
    })
  );

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver, PostResolver, ReactionResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  await server.start();
  server.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("server running on port 4000");
  });
};

main().catch((err) => console.error(err));
