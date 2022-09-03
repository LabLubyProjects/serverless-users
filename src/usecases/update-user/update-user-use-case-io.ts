import { UserModel } from "../../domain/users/user-model";

export type UpdateUserInput = { id: string } & Partial<UserModel>;

export type UpdateUserOutput = UserModel | null;