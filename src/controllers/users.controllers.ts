import { Request, Response } from "express";
import { IRequestUser } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersServices } from "../services/users/listAllUsers.service";
import { updateUserService } from "../services/users/updateUser.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const dataUser: IRequestUser = req.body;
  const userCreated = await createUserService(dataUser);

  return res.status(201).json(userCreated);
};

export const listAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allUsers = await listUsersServices();

  return res.status(200).json(allUsers);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = parseInt(req.params.id);

  const adminOrNot = req.user;

  const newUser = await updateUserService(req.body, idUser, adminOrNot);

  return res.json(newUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = parseInt(req.params.id);

  await deleteUserService(idUser);

  return res.status(204).send();
};
