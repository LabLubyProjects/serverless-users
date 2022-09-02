import { InvalidParamError } from "../errors/invalid-param";
import { Validation } from "../protocols/validation";
import { IntValidator } from "./protocols/int-validator";

export class IntValidation implements Validation {
  constructor(private readonly fieldName: string, private readonly intValidator: IntValidator) {}

  validate (input: any): Error | null {
    const isInt = this.intValidator.isInt(input[this.fieldName]);
    if(!isInt) return new InvalidParamError(this.fieldName);
    return null;
  }
}