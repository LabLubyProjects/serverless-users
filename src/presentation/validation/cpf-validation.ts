import { InvalidParamError } from "../errors/invalid-param";
import { Validation } from "../protocols/validation";
import { CpfValidator } from "./protocols/cpf-validator";

export class CpfValidation implements Validation {
  constructor(private readonly fieldName: string, private readonly cpfValidator: CpfValidator) {}

  validate (input: any): Error | null {
    const cpfIsValid = this.cpfValidator.isValid(input[this.fieldName]);
    if(!cpfIsValid) return new InvalidParamError(this.fieldName);
    return null;
  }
}