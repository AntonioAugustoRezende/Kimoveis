import { z } from "zod";
import { requestSchedulesSchemaArray } from "../schemas/schedules.schemas";

export type responseSchedules = z.infer<typeof requestSchedulesSchemaArray>;
