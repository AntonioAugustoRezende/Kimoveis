import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address, User } from "../entities";
import { AppError } from "../errors";
export const ensureAddressExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.body.address) {
    const addressRepository: Repository<Address> =
      AppDataSource.getRepository(Address);

    const findEmailUser = await addressRepository.findOne({
      where: {
        street: req.body.address.street,
      },
    });
    if (findEmailUser) {
      throw new AppError("Address already exists", 409);
    }
    return next();
  }
  return next();
};
