import { Request, Response } from "express";

export async function GetAuthUser(req: Request, res: Response) {
  if (req) res.status(200).send(`User susccesfully authentified!`);
  else res.status(400).send("Bad Request");
}
