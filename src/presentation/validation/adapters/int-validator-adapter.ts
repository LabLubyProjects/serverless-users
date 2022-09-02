import { IntValidator } from "../protocols/int-validator";
import validator from "validator";

export class IntValidatorAdapter implements IntValidator {
  isInt (int: any): boolean {
    return validator.isInt(int);
  }
}