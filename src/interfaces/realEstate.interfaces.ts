import { z } from "zod";
import {
  allRealEstate,
  requestRealEstateSchemas,
  returnAllRealSchemas,
  returnRealStateSchemas,
} from "../schemas/realEstate.schemas";

export type IRequestRealEstate = z.infer<typeof requestRealEstateSchemas>;
export type IReturnRealEstae = z.infer<typeof returnRealStateSchemas>;
export type IReturnRealEstateAll = z.infer<typeof allRealEstate>;
