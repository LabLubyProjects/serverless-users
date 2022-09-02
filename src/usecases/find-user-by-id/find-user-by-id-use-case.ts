import { UserRepository } from "../../domain/users/user-repository";
import { FindUserByIDOutput } from "./find-user-by-id-io";

export class FindUserByIDUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async handle(id: string): Promise<FindUserByIDOutput> {
    return this.userRepository.findByID(id);
  }
}