import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { IReturnRealEstae } from "../../interfaces/realEstate.interfaces";
import { returnAddressSchema } from "../../schemas/address.shemas";
import {
  allCategoriesSchemas,
  requestRealEstateSchemasData,
  returnRealStateSchemas,
} from "../../schemas/realEstate.schemas";

export const createRealEstateAndAddressService = async (
  dataRealEstate: any
): Promise<RealEstate> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const dataAddress = dataRealEstate.address;

  const createAddress = addressRepository.create(dataAddress);

  await addressRepository.save(createAddress);

  const newAddress = returnAddressSchema.parse(createAddress);

  const findAddress: Address | null = await addressRepository.findOneBy({
    id: newAddress.id,
  });

  const findCategory: Category | null = await categoryRepository.findOneBy({
    id: dataRealEstate.categoryId,
  });

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const newDataRealEstate = {
    value: dataRealEstate.value,
    size: dataRealEstate.size,
  };

  const createRealEstate = realEstateRepository.create({
    ...newDataRealEstate,
    address: findAddress!,
    category: findCategory!,
  });

  await realEstateRepository.save(createRealEstate);

  const realEstateCreated = allCategoriesSchemas.parse(createRealEstate);

  return createRealEstate;
};
