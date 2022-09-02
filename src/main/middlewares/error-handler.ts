import { Request, Response } from "express";
import { AccessDeniedError } from "../../presentation/errors/access-denied";
import { InvalidParamError } from "../../presentation/errors/invalid-param";
import { MissingParamError } from "../../presentation/errors/missing-param";
import { DuplicatedFieldError } from "../../usecases/errors/DuplicatedField";

export const errorHandler = (error: Error, _req: Request, res: Response) => {
  const errorBody = { error: error.message };
  if(error instanceof InvalidParamError || error instanceof MissingParamError) return res.status(400).json(errorBody);
  if(error instanceof AccessDeniedError) return res.status(403).json(errorBody);
  if(error instanceof DuplicatedFieldError) return res.status(409).json(errorBody);
  return res.status(500).json({ error: 'Internal Server Error'});
}