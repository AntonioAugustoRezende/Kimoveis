import { Request, Response } from "express";
import {
  IRequestRealEstate,
  IReturnRealEstae,
} from "../interfaces/realEstate.interfaces";
import { createRealEstateAndAddressService } from "../services/realEstate/createRealEstateAndAnddress.service";
import { listAllRealEstatesServices } from "../services/realEstate/listAllRealEstate.service";

export const createRealEstateControllers = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const realEstateData: IRequestRealEstate = req.body;

  const realEstate: any = await createRealEstateAndAddressService(
    realEstateData
  );

  return res.status(201).json(realEstate);
};

export const listAllRealEstateControllrs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listReal = await listAllRealEstatesServices();

  return res.status(200).json(listReal);
};
