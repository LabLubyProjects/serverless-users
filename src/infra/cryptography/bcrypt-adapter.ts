import * as bcryptjs from 'bcryptjs';
import { Hasher } from "../../usecases/protocols";

export class BcryptAdapter implements Hasher {

  constructor(private readonly salt: number) {}

  async hash(target: any): Promise<string> {
    const hashedValue = await bcryptjs.hash(target, this.salt);
    return hashedValue;
  }
}