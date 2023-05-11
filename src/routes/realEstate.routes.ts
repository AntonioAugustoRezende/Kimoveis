import { Router } from "express";
import {
  createRealEstateControllers,
  listAllRealEstateControllrs,
} from "../controllers/realEstate.controllers";
import { ensureAddressExistMiddleware } from "../middlewares/ensureAddressExist.middleware";
import { ensureDataValid } from "../middlewares/ensureDataValid.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserAdmMiddleware } from "../middlewares/ensureUserAdm.middleware";
import { requestRealEstateSchemas } from "../schemas/realEstate.schemas";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserAdmMiddleware,
  ensureAddressExistMiddleware,
  ensureDataValid(requestRealEstateSchemas),
  createRealEstateControllers
);

realEstateRoutes.get("", listAllRealEstateControllrs);
export default realEstateRoutes;
