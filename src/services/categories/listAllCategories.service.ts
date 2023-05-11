import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { ICategoriesReturn } from "../../interfaces/categories.interfaces";
import cartegoriesRoutes from "../../routes/categories.routes";
import { returnAllCategoriesSchemas } from "../../schemas/categories.schema";

export const listAllCategoriesService =
  async (): Promise<Array<ICategoriesReturn> | void> => {
    const categoriesRepository: Repository<Category> =
      AppDataSource.getRepository(Category);

    const listAllCategories: Array<Category> =
      await categoriesRepository.find();

    const allCategories = returnAllCategoriesSchemas.parse(listAllCategories);

    return allCategories;
  };
