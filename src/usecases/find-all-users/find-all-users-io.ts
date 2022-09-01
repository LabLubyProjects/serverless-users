import { UserModel } from "src/domain/users/user-model";

export type Pagination = {
  page?: number;
  perPage?: number;
}

export interface FindAllUsersOutput {
  pagination?: Pagination;
  outputUsers: Omit<UserModel, 'password'>[];
}