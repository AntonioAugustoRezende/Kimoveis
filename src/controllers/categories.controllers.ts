import { Request, Response } from "express";
import { ICategoriesRequest } from "../interfaces/categories.interfaces";
import { createCategoriesService } from "../services/categories/createCategories.service";
import { listAllCategoriesService } from "../services/categories/listAllCategories.service";
import { listAllRealEstateByIdOfCategoryService } from "../services/categories/listAllRealEstateByIdOfCategories.service";

export const createCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const dataCategories: ICategoriesRequest = req.body;

  const newCategoy = await createCategoriesService(dataCategories);

  return res.status(201).json(newCategoy);
};

export const listAllCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoies = await listAllCategoriesService();

  return res.status(200).json(categoies);
};
export const listAllCategoriesByIdControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idCategory: number = parseInt(req.params.id);
  const categoies = await listAllRealEstateByIdOfCategoryService(idCategory);

  return res.status(200).json(categoies);
};
