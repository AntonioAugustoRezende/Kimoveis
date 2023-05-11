import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

export const listSchedulesServices = async (
  idRealEstate: number
): Promise<RealEstate | null> => {
  const scheduleRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const scheduleQueryBuilder = await scheduleRepository
    .createQueryBuilder("real_state")
    .select(["real_state", "address", "category", "schedules", "users"])
    .innerJoin("real_state.address", "address")
    .innerJoin("real_state.category", "category")
    .innerJoin("real_state.schedules", "schedules")
    .innerJoin("schedules.user", "users")
    .where("real_state.id = :id", { id: idRealEstate })
    .getOne();

  return scheduleQueryBuilder;
};
