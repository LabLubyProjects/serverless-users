import { CreateUserInput, CreateUserOutput } from "./create-user-io";
import { UserRepository } from "src/domain/users/user-repository";
import { DuplicatedFieldError } from "../errors/DuplicatedField";
import { Hasher } from "../protocols";
import { UserModel } from "src/domain/users/user-model";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher) {}

  async handle(input: CreateUserInput): Promise<CreateUserOutput> {
    const existsByEmail = await this.userRepository.findByEmail(input.email);
    if(existsByEmail) throw new DuplicatedFieldError('Email');
    
    const existsByCPF = await this.userRepository.findByCPF(input.cpf);
    if(existsByCPF) throw new DuplicatedFieldError('CPF');
    
    const hashedPassword = this.hasher.hash(input.password);
    const newUser: UserModel = {
      name: input.name,
      cpf: input.cpf,
      email: input.email,
      password: hashedPassword
    };

    const { password, ...outputUser } = await this.userRepository.create(newUser);
    return outputUser;
  }
}