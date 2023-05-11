import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import { ensureDataValid } from "../middlewares/ensureDataValid.middleware";
import { ensureEmailExist } from "../middlewares/ensureEmailExist.middleware";
import { ensureIdExistMiddleware } from "../middlewares/ensureIdExist.middlewares";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserAdmMiddleware } from "../middlewares/ensureUserAdm.middleware";
import { updateUserRequestSchema, userSchema } from "../schemas/users.schema";

const userRouter: Router = Router();

userRouter.post(
  "",
  ensureDataValid(userSchema),
  ensureEmailExist,
  createUserController
);

userRouter.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserAdmMiddleware,
  listAllUsersController
);
userRouter.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIdExistMiddleware,
  ensureDataValid(updateUserRequestSchema),
  updateUserController
);

userRouter.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIdExistMiddleware,
  ensureUserAdmMiddleware,
  deleteUserController
);
export default userRouter;
