import { Validation } from "../../protocols/validation";
import { CpfValidatorAdapter } from "../../validation/adapters/cpf-validator-adapter";
import { EmailValidatorAdapter } from "../../validation/adapters/email-validator-adapter";
import { CpfValidation } from "../../validation/cpf-validation";
import { EmailValidation } from "../../validation/email-validation";
import { RequiredFieldValidation } from "../../validation/required-field-validation";
import { ValidationComposite } from "../../validation/validation-composite";

export const createUserValidations = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ['name', 'cpf', 'email', 'password']) validations.push(new RequiredFieldValidation(field));
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
  validations.push(new CpfValidation('cpf', new CpfValidatorAdapter()));
  return new ValidationComposite(validations);
}
