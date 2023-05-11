import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  returnUserSchema,
  updateUserRequestSchema,
  userSchema,
} from "../schemas/users.schema";

export type IRequestUser = z.infer<typeof userSchema>;
export type IUserReturn = z.infer<typeof returnUserSchema>;

export type IUserUpdate = DeepPartial<IRequestUser>;
