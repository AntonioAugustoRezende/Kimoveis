import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

import { returnCategoriesSchemas } from "../../schemas/categories.schema";
import { returnAllRealByCategoriesSchemasArray } from "../../schemas/realEstate.schemas";

export const listAllRealEstateByIdOfCategoryService = async (
  idCategory: number
): Promise<any> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOne({
    where: {
      id: idCategory,
    },
    relations: {
      realEstate: true,
    },
  });

  const categories = returnCategoriesSchemas.parse(findCategory);

  return categories;
};
