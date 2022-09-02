import { Validation } from "../../protocols/validation";
import { CpfValidatorAdapter } from "../../validation/adapters/cpf-validator-adapter";
import { EmailValidatorAdapter } from "../../validation/adapters/email-validator-adapter";
import { IntValidatorAdapter } from "../../validation/adapters/int-validator-adapter";
import { CpfValidation } from "../../validation/cpf-validation";
import { EmailValidation } from "../../validation/email-validation";
import { IntValidation } from "../../validation/int-validation";
import { RequiredFieldValidation } from "../../validation/required-field-validation";
import { ValidationComposite } from "../../validation/validation-composite";

export const createUserValidations = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ['name', 'cpf', 'email', 'password']) validations.push(new RequiredFieldValidation(field));
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
  validations.push(new CpfValidation('cpf', new CpfValidatorAdapter()));
  return new ValidationComposite(validations);
}

export const updateUserValidations = (fields: string[]): ValidationComposite => {
  const validations: Validation[] = [];
  if(fields.includes('email')) validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
  if(fields.includes('cpf'))  validations.push(new CpfValidation('cpf', new CpfValidatorAdapter()));
  return new ValidationComposite(validations);
}

export const paginationValidations = (fields: string[]): ValidationComposite => {
  const validations: Validation[] = [];
  if(fields.includes('page')) validations.push(new IntValidation('page', new IntValidatorAdapter()));
  if(fields.includes('perPage'))  validations.push(new IntValidation('perPage', new IntValidatorAdapter()));
  return new ValidationComposite(validations);
}
