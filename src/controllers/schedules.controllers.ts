import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { createSchedulesServices } from "../services/schedules/createSchedules.service";
import { listSchedulesServices } from "../services/schedules/listAllSchedules.service";

export const createSchedulesControllers = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const idUser: number = Number(req.user.id);

  const dataSchedules = req.body;

  await createSchedulesServices(idUser, dataSchedules);

  return res.status(201).json({
    message: "Schedule created",
  });
};

export const listAllSchedulesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = parseInt(req.params.id);

  const listSchedules: RealEstate | null = await listSchedulesServices(idUser);

  return res.status(200).json(listSchedules);
};
