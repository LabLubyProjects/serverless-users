import { BcryptAdapter } from "src/infra/cryptography/bcrypt-adapter";

export const makeBcryptAdapter = (): BcryptAdapter => {
  const salt = 12;
  return new BcryptAdapter(salt);
}