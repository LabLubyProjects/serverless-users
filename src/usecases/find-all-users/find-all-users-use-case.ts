import { UserRepository } from "src/domain/users/user-repository";
import { FindAllUsersInput, FindAllUsersOutput } from "./find-all-users-io";

export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(input: FindAllUsersInput): Promise<FindAllUsersOutput> {
    const allUsers = await this.userRepository.findAll(input);
    return allUsers;
  }
}