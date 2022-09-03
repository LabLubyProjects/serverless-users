import { UserModel } from "../../domain/users/user-model";

declare module Express {
  interface Request {
    user: UserModel
  }
}