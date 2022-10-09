import { Request, Response } from "express";

export type Context = {
  req: Request & { session: any };
  res: Response;
};
