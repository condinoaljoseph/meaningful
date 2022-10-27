import { Request, Response } from "express";
import { Session } from "express-session";
import { createReactionLoader } from "./utils/createReactionLoader";
import { createUserLoader } from "./utils/createUserLoader";

export type AppContext = {
  req: Request & { session: Session & { userId?: number } };
  res: Response;
  userLoader: ReturnType<typeof createUserLoader>;
  reactionLoader: ReturnType<typeof createReactionLoader>;
};
