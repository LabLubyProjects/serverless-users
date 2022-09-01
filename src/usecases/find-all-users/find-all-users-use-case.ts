import { UserRepository } from "src/domain/users/user-repository";
import { Pagination, FindAllUsersOutput } from "./find-all-users-io";

export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(input?: Pagination): Promise<FindAllUsersOutput> {
    if(input?.page || input?.perPage) {
      const page = input.page ?? 0;
      const perPage = input.perPage ?? 10;
      const pagination = { page, perPage };
      const allUsers = await this.userRepository.findAll(pagination);
      const outputUsers = allUsers.map(user => {
        const { password, ...outputUser } = user;
        return outputUser;
      });
      return {pagination, outputUsers};
    }
    const outputUsers = await this.userRepository.findAll();
    return { outputUsers };
  }
}