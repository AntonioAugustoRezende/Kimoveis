import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IRequestUser, IUserReturn } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";

export const createUserService = async (
  dataUser: IRequestUser
): Promise<IUserReturn | void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(dataUser);
  await userRepository.save(user);

  const newUser = returnUserSchema.parse(user);

  return newUser;
};
