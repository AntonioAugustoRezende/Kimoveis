import { number, z } from "zod";
import {
  returnAllRealByCategoriesSchemas,
  returnAllRealByCategoriesSchemasArray,
} from "./realEstate.schemas";

export const requestCategoriesSchemas = z.object({
  name: z.string(),
});
export const returnCategoriesSchemas = requestCategoriesSchemas.extend({
  id: z.number(),
  realEstate: returnAllRealByCategoriesSchemasArray.nullish(),
});
export const returnCategoriesSchemasAddresses = requestCategoriesSchemas.extend(
  {
    id: z.number(),
  }
);

export const cartegoryOnRealStateSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const returnCategoriesSchemasReal = requestCategoriesSchemas.extend({
  id: z.number(),
  name: z.string(),
  realEstate: returnAllRealByCategoriesSchemasArray.nullish(),
});

export const returnAllCategoriesSchemas = returnCategoriesSchemas.array();

export const requestCategoryOnRealEstate = z.object({
  id: number(),
});
