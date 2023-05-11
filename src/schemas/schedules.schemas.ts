import { z } from "zod";
import { requestScheduleSchema } from "./realEstate.schemas";
import { requestUserSchedulesSchema } from "./users.schema";

export const requestSchedulesSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
  user: requestUserSchedulesSchema.nullish(),
});

export const requestSchedulesSchemaArray = requestSchedulesSchema.array();
