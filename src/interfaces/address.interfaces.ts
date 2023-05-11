import { z } from "zod";
import {
  requestAddressSchema,
  returnAddressSchema,
} from "../schemas/address.shemas";

export type IRequestAddress = z.infer<typeof requestAddressSchema>;
export type IReturnAddress = z.infer<typeof returnAddressSchema>;
