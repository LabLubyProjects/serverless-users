import { Hasher } from "src/usecases/protocols";
import { hash } from "bcryptjs";

export class BcryptAdapter implements Hasher {

  constructor(private readonly salt: number) {}

  async hash(target: any): Promise<string> {
    const hashedValue = await hash(target, this.salt);
    return hashedValue;
  }
}