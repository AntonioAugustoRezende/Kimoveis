import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";

export const updateUserService = async (
  newUser: IUserUpdate,
  id: number,
  adminOrNot: any
): Promise<IUserReturn | void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOneBy({
    id: id,
  });

  if (adminOrNot.admin) {
    const user = userRepository.create({
      ...oldUser,
      ...newUser,
    });

    await userRepository.save(user);

    const updatedUser = returnUserSchema.parse(user);

    return updatedUser;
  } else {
    if (id == adminOrNot.id) {
      const user = userRepository.create({
        ...oldUser,
        ...newUser,
      });

      await userRepository.save(user);

      const updatedUser = returnUserSchema.parse(user);

      return updatedUser;
    } else {
      throw new AppError("Insufficient permission", 403);
    }
  }
};
