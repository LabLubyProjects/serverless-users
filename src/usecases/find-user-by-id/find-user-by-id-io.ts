import { UserModel } from "../../domain/users/user-model";

export type FindUserByIDOutput = Omit<UserModel, 'password'> | null;