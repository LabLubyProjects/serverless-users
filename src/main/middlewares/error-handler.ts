import { NextFunction, Request, Response } from "express";
import { AccessDeniedError } from "../../presentation/errors/access-denied";
import { InvalidParamError } from "../../presentation/errors/invalid-param";
import { MissingParamError } from "../../presentation/errors/missing-param";
import { ServerError } from "../../presentation/errors/server-error";
import { UnauthorizedError } from "../../presentation/errors/unauthorized";
import { DuplicatedFieldError } from "../../usecases/errors/DuplicatedField";

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const errorBody = { error: error.message };
  if(error instanceof InvalidParamError || error instanceof MissingParamError) return res.status(400).json(errorBody);
  if(error instanceof UnauthorizedError) return res.status(401).json(errorBody);
  if(error instanceof AccessDeniedError) return res.status(403).json(errorBody);
  if(error instanceof DuplicatedFieldError) return res.status(409).json(errorBody);
  if(error instanceof ServerError) return res.status(500).json({ error: 'Internal Server Error'});
  return res.status(500).json({ error: 'Internal Server Error' });
}