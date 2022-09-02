import { UpdateUserUseCase } from "../../../usecases/update-user/update-user-use-case";
import { makeBcryptAdapter } from "../cryptography/bcrypt-adapter-factory";
import { makeDbUserRepository } from "../repositories/db-user-repository-factory";

export const makeUpdateUserUseCase = (): UpdateUserUseCase => {
  const updateUserUseCase = new UpdateUserUseCase(makeDbUserRepository(), makeBcryptAdapter());
  return updateUserUseCase;
}