import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { RealEstate, User } from "../entities";
import { AppError } from "../errors";

export const ensureIdRealEstaeteMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.params.id) {
    const realEstateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);

    const findIdRealEstate = await realEstateRepository.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!findIdRealEstate) {
      throw new AppError("RealEstate not found", 404);
    }
    return next();
  }
  return next();
};
