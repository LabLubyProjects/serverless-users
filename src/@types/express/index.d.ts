import { UserModel } from "../../domain/users/user-model";

declare global {
  namespace Express {
    interface Request {
      user?: UserModel
    }
  }
}
