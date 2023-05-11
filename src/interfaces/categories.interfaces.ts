import { z } from "zod";
import {
  requestCategoriesSchemas,
  returnCategoriesSchemas,
} from "../schemas/categories.schema";

export type ICategoriesRequest = z.infer<typeof requestCategoriesSchemas>;
export type ICategoriesReturn = z.infer<typeof returnCategoriesSchemas>;
