import "reflect-metadata";
import "dotenv-safe/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/User";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import { COOKIE_NAME, __prod__ } from "./constants";
import { PostResolver } from "./resolvers/post";
import { ReactionResolver } from "./resolvers/reaction";
import cors from "cors";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import { Reaction } from "./entities/Reaction";
import { createConnection } from "typeorm";
import path from "path";
import { createUserLoader } from "./utils/createUserLoader";
import { createReactionLoader } from "./utils/createReactionLoader";
import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";

const main = async () => {
  const redis = new Redis(process.env.REDIS_URL);
  const RedisStore = connectRedis(session);

  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [User, Post, Reaction],
    migrations: [path.join(__dirname, "./migrations/*")],
  });

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

  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID || "",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        callbackURL: "http://localhost:4000/oauth/github",
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        cb: any
      ) => {
        let user = await User.findOne({ githubId: profile.id });

        if (!user) {
          user = await User.create({
            username: profile.username,
            githubId: profile.id,
            displayName: profile.displayName,
            bio: profile._json.bio,
            image: profile._json.avatar_url,
            location: profile._json.location,
            blog: profile._json.blog,
            twitterUsername: profile._json.twitterUsername,
          }).save();
        }

        cb(null, { user, accessToken, refreshToken });
      }
    )
  );

  app.use(passport.initialize());

  app.get(
    "/auth/github",
    passport.authenticate("github", { scope: ["user"], session: false })
  );

  app.get(
    "/oauth/github",
    passport.authenticate("github", { session: false }),
    (req: any, res) => {
      if (req.user.user.id && req.session) {
        req.session.userId = req.user.user.id;
        req.session.accessToken = req.user.accessToken;
        req.session.refreshToken = req.user.refreshToken;
      }

      res.redirect("http://localhost:3000/");
    }
  );

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, PostResolver, ReactionResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: ({ req, res }) => ({
      req,
      res,
      userLoader: createUserLoader(),
      reactionLoader: createReactionLoader(),
    }),
  });

  await server.start();
  server.applyMiddleware({ app, cors: false });

  app.listen(process.env.PORT, () => {
    console.log("server running on port " + process.env.PORT);
  });
};

main().catch((err) => console.error(err));
