import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserReturn } from "../../interfaces/users.interfaces";
import { returnAllUsersSchema } from "../../schemas/users.schema";

export const listUsersServices =
  async (): Promise<Array<IUserReturn> | void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findAllUser: Array<User> = await userRepository.find();

    const allUsers = returnAllUsersSchema.parse(findAllUser);

    console.log(allUsers);

    return allUsers;
  };
