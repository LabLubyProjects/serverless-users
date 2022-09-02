import { InvalidParamError } from "../errors/invalid-param";
import { Validation } from "../protocols/validation";
import { EmailValidator } from "./protocols/email-validator";

export class EmailValidation implements Validation {
  constructor (private readonly fieldName: string, private readonly emailValidator: EmailValidator) {}

  validate (input: any): Error | null {
    const emailIsValid = this.emailValidator.isValid(input[this.fieldName]);
    if(!emailIsValid) return new InvalidParamError(this.fieldName);
    return null;
  }
}