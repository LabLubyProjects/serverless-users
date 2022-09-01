import { UserModel } from "./user-model";

export interface UserRepository {
  create(user: UserModel): Promise<UserModel>;
  findByCPF(cpf: string): Promise<UserModel | null>;
  findByEmail(email: string): Promise<UserModel | null>;
}