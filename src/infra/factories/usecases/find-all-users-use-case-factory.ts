import { FindAllUsersUseCase } from "src/usecases/find-all-users/find-all-users-use-case";
import { makeDbUserRepository } from "../repositories/db-user-repository-factory";

export const makeFindAllUsersUseCase = (): FindAllUsersUseCase => {
  const findAllUsersUseCase = new FindAllUsersUseCase(makeDbUserRepository());
  return findAllUsersUseCase;
}