import { Response } from "express";

export async function GetAuthUser(res: Response) {
  res.status(200).send("User susccesfully authentified");
}
