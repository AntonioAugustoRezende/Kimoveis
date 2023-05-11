import { Router } from "express";
import {
  createSchedulesControllers,
  listAllSchedulesControllers,
} from "../controllers/schedules.controllers";
import { ensureDataValid } from "../middlewares/ensureDataValid.middleware";
import { ensureIdRealEstaeteMiddleware } from "../middlewares/ensureIdRealEstateExist.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserAdmMiddleware } from "../middlewares/ensureUserAdm.middleware";
import { requestSchedulesSchema } from "../schemas/schedules.schemas";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataValid(requestSchedulesSchema),
  createSchedulesControllers
);

schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureUserAdmMiddleware,
  ensureIdRealEstaeteMiddleware,
  listAllSchedulesControllers
);

export default schedulesRoutes;
