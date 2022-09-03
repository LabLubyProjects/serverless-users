import { NextFunction, Request, Response } from "express";
import httpClient from "../../presentation/adapters/axios-adapter";
import { AccessDeniedError } from "../../presentation/errors/access-denied";
import { UnauthorizedError } from "../../presentation/errors/unauthorized";

export const auth = async (req: Request, _res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if(!token) throw new UnauthorizedError();

  const ms_url = process.env.AUTH_MS_URL ?? 'http://localhost:4000';

  const requestToAuthMS = await httpClient.post(`${ms_url}/verify-token`, {
    token
  });

  if (requestToAuthMS.body.data.isValid === true) next();

  throw new AccessDeniedError();
}