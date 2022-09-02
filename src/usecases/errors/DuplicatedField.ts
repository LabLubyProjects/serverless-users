export class DuplicatedFieldError extends Error {
  constructor(field: string) {
    super(`Campo duplicado: ${field}`);
    this.name = 'DuplicatedFieldError';
  }
}