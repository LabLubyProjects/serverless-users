import { UserRepository } from "../../domain/users/user-repository";

export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}