import { CreateUserInput, CreateUserOutput } from "./create-user-io";
import { DuplicatedFieldError } from "../errors/DuplicatedField";
import { Hasher } from "../protocols";
import { UserModel } from "../../domain/users/user-model";
import { UserRepository } from "../../domain/users/user-repository";


export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher) {}

  async handle(input: CreateUserInput): Promise<CreateUserOutput> {
    const existsByEmail = await this.userRepository.findByEmail(input.email);
    if(existsByEmail) throw new DuplicatedFieldError('Email');
    
    const existsByCPF = await this.userRepository.findByCPF(input.cpf);
    if(existsByCPF) throw new DuplicatedFieldError('CPF');
    
    const hashedPassword = await this.hasher.hash(input.password);
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