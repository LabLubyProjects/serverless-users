import { UserModel } from "src/domain/users/user-model";

export type FindUserByIDOutput = Omit<UserModel, 'password'> | null;