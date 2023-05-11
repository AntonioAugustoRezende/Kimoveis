import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";

export const createSchedulesServices = async (
  idUser: number,
  data: any
): Promise<any | void> => {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const dateSchedule = new Date(data.date);

  const teste = dateSchedule.getDay();

  if (teste === 0 || teste === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const findIdRealEstate = await realEstateRepository.findOne({
    where: {
      id: Number(data.realEstateId),
    },
  });

  if (!findIdRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  const newhour = Number(data.hour.slice(0, 2));

  if (newhour < 8 || newhour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const verifySchedules = await schedulesRepository
    .createQueryBuilder("schedules_users_properties")
    .select(["schedules_users_properties"])
    .where("schedules_users_properties.date = :date", { date: data.date })
    .andWhere("schedules_users_properties.hour = :hour", { hour: data.hour })
    .andWhere("schedules_users_properties.user = :id", { id: idUser })
    .getMany();

  if (verifySchedules.length > 0) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const verifySchedulesInSameDate = await schedulesRepository
    .createQueryBuilder("schedules_users_properties")
    .select(["schedules_users_properties"])
    .where("schedules_users_properties.date = :date", { date: data.date })
    .andWhere("schedules_users_properties.hour = :hour", { hour: data.hour })
    .getMany();

  if (verifySchedulesInSameDate.length > 0) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const createSchedules = schedulesRepository.create({
    realEstate: data.propertieId!,
    user: idUser!,
    ...data,
  });

  await schedulesRepository.save(createSchedules);
};
