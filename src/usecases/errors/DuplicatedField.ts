export class DuplicatedFieldError extends Error {
  constructor(field: string) {
    super(`Campo duplicado: ${field}`);
  }
}