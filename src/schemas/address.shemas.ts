import { z } from "zod";

export const requestAddressSchema = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(6).nullish(),
  city: z.string().max(20),
  state: z.string().max(2),
});

export const returnAddressSchema = requestAddressSchema.extend({
  id: z.number(),
});
