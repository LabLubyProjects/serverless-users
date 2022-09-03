
import { UserRepository } from "../../domain/users/user-repository";
import { DuplicatedFieldError } from "../errors/DuplicatedField";
import { Hasher } from "../protocols";
import { UpdateUserInput, UpdateUserOutput } from "./update-user-use-case-io";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher) {}

  async handle(input: UpdateUserInput): Promise<UpdateUserOutput> {
    const user = await this.userRepository.findByID(input.id);
    if(!user) return null;

   if(input.email) {
    const existsByEmail = await this.userRepository.findByEmail(input.email);
    if(existsByEmail && user.id !== existsByEmail.id) throw new DuplicatedFieldError('Email');
   }
    
    if(input.cpf) {
      const existsByCPF = await this.userRepository.findByCPF(input.cpf);
      if(existsByCPF && user.id !== existsByCPF.id) throw new DuplicatedFieldError('CPF');
    }

    if(input.password) input.password = await this.hasher.hash(input.password);

    const outputUser = await this.userRepository.update(input);
    return outputUser;
  }
}