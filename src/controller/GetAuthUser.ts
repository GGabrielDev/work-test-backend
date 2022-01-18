import { Request, Response } from "express";

export async function GetAuthUser(req: Request, res: Response) {
  res.status(200).send(`User susccesfully authentified! ${req.body.user}`);
}
