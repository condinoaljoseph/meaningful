import { AppContext } from "src/types";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";

export const isAuth: Middleware<AppContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("not authenticated");
  }

  return next();
};
