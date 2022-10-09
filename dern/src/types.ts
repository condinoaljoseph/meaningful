import { Request, Response } from "express";

export type AppContext = {
  req: Request & { session: any };
  res: Response;
};
