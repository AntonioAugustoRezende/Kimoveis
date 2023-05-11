import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import { ensureDataValid } from "../middlewares/ensureDataValid.middleware";
import { createLoginSchema } from "../schemas/login.schemas";

const loginRoutes: Router = Router();

loginRoutes.post("", ensureDataValid(createLoginSchema), createLoginController);

export default loginRoutes;
