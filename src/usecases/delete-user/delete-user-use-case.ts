import { UserRepository } from "../../domain/users/user-repository";

export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(id: string): Promise<void | null> {
    const user = await this.userRepository.findByID(id);

    if(!user) return null;
    
    await this.userRepository.delete(id);
  }
}