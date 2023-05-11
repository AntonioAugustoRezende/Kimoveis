import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category, User } from "../entities";
import { AppError } from "../errors";

export const ensureIdCategoryExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.params.id) {
    const categoryRepository: Repository<Category> =
      AppDataSource.getRepository(Category);

    const findIdUser = await categoryRepository.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!findIdUser) {
      throw new AppError("Category not found", 404);
    }
    return next();
  }
  return next();
};
