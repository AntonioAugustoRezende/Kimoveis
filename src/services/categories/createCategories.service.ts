import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import {
  ICategoriesRequest,
  ICategoriesReturn,
} from "../../interfaces/categories.interfaces";
import { returnCategoriesSchemas } from "../../schemas/categories.schema";

export const createCategoriesService = async (
  dataCategories: ICategoriesRequest
): Promise<ICategoriesReturn | void> => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategoryByName = await categoriesRepository.findOne({
    where: {
      name: dataCategories.name,
    },
  });
  if (findCategoryByName) {
    throw new AppError("Category already exists", 409);
  }

  const category = categoriesRepository.create(dataCategories);

  await categoriesRepository.save(category);

  const newCategory = returnCategoriesSchemas.parse(category);

  return newCategory;
};
