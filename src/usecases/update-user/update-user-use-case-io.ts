import { UserModel } from "../../domain/users/user-model";

export type UpdateUserInput = { id: string } & Partial<UserModel>;

export type UpdateUserOutput = Omit<UserModel, 'password'> | null;