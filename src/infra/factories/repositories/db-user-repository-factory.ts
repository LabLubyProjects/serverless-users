import { DbUserRepository } from "src/infra/db-repositories/db-user-repository";

export const makeDbUserRepository = (): DbUserRepository => {
  return new DbUserRepository();
}