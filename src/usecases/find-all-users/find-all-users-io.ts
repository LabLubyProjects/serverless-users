import { UserModel } from "src/domain/users/user-model";

export type FindAllUsersInput = {
  page?: number;
  perPage?: number;
}

export type FindAllUsersOutput = Omit<UserModel, 'password'>[]