import { UserModel } from "./user-model";

export interface UserRepository {
  create(user: UserModel): Promise<UserModel>;
  update(user: UserModel): Promise<UserModel>;
  delete(id: string): Promise<void>;
  findByCPF(cpf: string): Promise<UserModel | null>;
  findByEmail(email: string): Promise<UserModel | null>;
  findByID(id: string): Promise<UserModel | null>;
  findAll(pagination?:{ page: number, perPage: number }): Promise<UserModel[]>;
}