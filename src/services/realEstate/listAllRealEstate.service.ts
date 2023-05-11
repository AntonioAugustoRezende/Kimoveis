import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
  IReturnRealEstae,
  IReturnRealEstateAll,
} from "../../interfaces/realEstate.interfaces";
import { allRealEstate } from "../../schemas/realEstate.schemas";

export const listAllRealEstatesServices =
  async (): Promise<IReturnRealEstateAll> => {
    const realReponsitory: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);

    const findReal = await realReponsitory.find({
      relations: {
        address: true,
      },
    });

    const parseReal = allRealEstate.parse(findReal);

    return parseReal;
  };
