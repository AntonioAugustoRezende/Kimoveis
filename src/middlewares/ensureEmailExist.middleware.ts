import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const ensureEmailExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.body.email) {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findEmailUser = await userRepository.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (findEmailUser) {
      throw new AppError("Email already exists", 409);
    }
    return next();
  }
  return next();
};
