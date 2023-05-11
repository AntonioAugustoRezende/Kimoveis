import { Router } from "express";
import {
  createCategoriesController,
  listAllCategoriesByIdControllers,
  listAllCategoriesControllers,
} from "../controllers/categories.controllers";
import { ensureDataValid } from "../middlewares/ensureDataValid.middleware";
import { ensureIdCategoryExistMiddleware } from "../middlewares/ensureIdCategoryExist.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserAdmMiddleware } from "../middlewares/ensureUserAdm.middleware";
import { requestCategoriesSchemas } from "../schemas/categories.schema";

const cartegoriesRoutes: Router = Router();

cartegoriesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataValid(requestCategoriesSchemas),
  ensureUserAdmMiddleware,
  createCategoriesController
);
cartegoriesRoutes.get("", listAllCategoriesControllers);
cartegoriesRoutes.get(
  "/:id/realEstate",
  ensureIdCategoryExistMiddleware,
  listAllCategoriesByIdControllers
);
export default cartegoriesRoutes;
