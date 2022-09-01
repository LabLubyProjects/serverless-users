import { FindUserByIDUseCase } from "../../../usecases/find-user-by-id/find-user-by-id-use-case"
import { makeDbUserRepository } from "../repositories/db-user-repository-factory";

export const makeFindUserByIDUseCase = (): FindUserByIDUseCase => {
  const findUserByIDUseCase = new FindUserByIDUseCase(makeDbUserRepository());
  return findUserByIDUseCase;
}