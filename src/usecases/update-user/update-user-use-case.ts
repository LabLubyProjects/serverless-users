import { UserModel } from "src/domain/users/user-model";
import { UserRepository } from "src/domain/users/user-repository";
import { Hasher } from "../protocols";
import { mergeObjectsUsingTruthyValues } from "../utils";
import { UpdateUserInput, UpdateUserOutput } from "./update-user-use-case-io";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher) {}

  async handle(input: UpdateUserInput): Promise<UpdateUserOutput> {
    const user = await this.userRepository.findByID(input.id);
    if(!user) return null;

    if(input.password) input.password = await this.hasher.hash(input.password);

    const updatedUserData: UserModel = mergeObjectsUsingTruthyValues(user, input);

    const { password, ...outputUser } = await this.userRepository.update(updatedUserData);
    return outputUser;
  }
}