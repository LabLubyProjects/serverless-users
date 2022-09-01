import { CreateUserUseCase } from "src/usecases/create-user/create-user-use-case";
import { makeBcryptAdapter } from "../cryptography/bcrypt-adapter-factory";
import { makeDbUserRepository } from "../repositories/db-user-repository-factory";

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  const createUserUseCase = new CreateUserUseCase(makeDbUserRepository(), makeBcryptAdapter());
  return createUserUseCase;
}