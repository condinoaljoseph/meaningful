import { Request, Response } from "express";
import { Session } from "express-session";

export type AppContext = {
  req: Request & { session: Session & { userId?: number } };
  res: Response;
};
