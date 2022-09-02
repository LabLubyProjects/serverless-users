import { CpfValidator } from "../protocols/cpf-validator";
import { cpf } from "cpf-cnpj-validator";

export class CpfValidatorAdapter implements CpfValidator {
  isValid (cpfString: string): boolean {
    return cpf.isValid(cpfString);
  }
}