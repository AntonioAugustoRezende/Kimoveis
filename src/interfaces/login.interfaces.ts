import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schemas";

export type IUserLogin = z.infer<typeof createLoginSchema>;
