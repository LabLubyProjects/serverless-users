import { DbUserRepository } from "../../db-repositories/db-user-repository";

export const makeDbUserRepository = (): DbUserRepository => {
  return new DbUserRepository();
}