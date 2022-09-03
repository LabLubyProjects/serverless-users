import { UserModel }  from '../../domain/users/user-model'

export type CreateUserInput = Omit<UserModel, 'id'>;

export type CreateUserOutput = UserModel;