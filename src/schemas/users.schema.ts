import { hashSync } from "bcryptjs";
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().min(3).max(45),
  admin: z.boolean().default(false),
  password: z.string().min(4).max(20),
});

export const updateUserRequestSchema = userSchema
  .partial()
  .omit({ admin: true });

export const returnUserSchema = userSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({
    password: true,
  });

export const requestUserSchedulesSchema = z.object({
  id: z.number(),
});

export const returnAllUsersSchema = returnUserSchema.array();
