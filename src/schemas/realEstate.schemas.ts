import { z } from "zod";
import { requestAddressSchema, returnAddressSchema } from "./address.shemas";
import { returnCategoriesSchemasAddresses } from "./categories.schema";

export const requestRealEstateSchemas = z.object({
  sold: z.boolean().default(false).nullish(),
  categoryId: z.number().nullish(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  address: requestAddressSchema,
});

export const requestRealEstateSchemasData = z.object({
  id: z.number(),
  sold: z.boolean().default(false).nullish(),
  value: z.number().or(z.string()).default(0),
  size: z.number(),
});

export const returnRealStateSchemas = requestRealEstateSchemas.extend({
  id: z.number(),
  createdAt: z.string().or(z.date()).nullish(),
  updatedAt: z.string().or(z.date()).nullish(),
  address: returnAddressSchema,
  category: returnCategoriesSchemasAddresses,
});

export const allCategoriesSchemas = z.object({
  id: z.number(),
  createdAt: z.string().or(z.date()).nullish(),
  updatedAt: z.string().or(z.date()).nullish(),
  address: returnAddressSchema,
  /* category: cartegoryOnRealStateSchema, */
  sold: z.boolean().default(false).nullish(),
  categoryId: z.number().nullish(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
});

export const returnAllRealByCategoriesSchemas = z.object({
  id: z.number(),
  sold: z.boolean().default(false).nullish(),
  categoryId: z.number().nullish(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  address: returnAddressSchema.nullish(),
});
export const returnAllRealSchemas = z.object({
  id: z.number(),
  sold: z.boolean().default(false).nullish(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  address: returnAddressSchema.nullish(),
});

export const requestScheduleSchema = z.object({
  id: z.number(),
});

export const allRealEstate = returnAllRealSchemas.array();

export const returnAllRealByCategoriesSchemasArray =
  returnAllRealByCategoriesSchemas.array();
