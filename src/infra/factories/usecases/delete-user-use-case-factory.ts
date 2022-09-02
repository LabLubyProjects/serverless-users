import { DeleteUserUseCase } from "../../../usecases/delete-user/delete-user-use-case";
import { makeDbUserRepository } from "../repositories/db-user-repository-factory";

export const makeDeleteUserUseCase = (): DeleteUserUseCase => {
  const deleteUserUseCase = new DeleteUserUseCase(makeDbUserRepository());
  return deleteUserUseCase;
}