import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/login.interfaces";
import { createLoginService } from "../services/login/login.service";

export const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: IUserLogin = req.body;
  const token: string = await createLoginService(loginData);

  return res.json({
    token: token,
  });
};
