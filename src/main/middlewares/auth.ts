import { NextFunction, Request, Response } from "express";
import { makeDbUserRepository } from "../../infra/factories/repositories/db-user-repository-factory";
import httpClient from "../../presentation/adapters/axios-adapter";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if(!token) return res.status(401).json({
    error: 'Unauthorized'
  })

  const ms_url = process.env.AUTH_MS_URL ?? 'http://localhost:4000';

  const requestToAuthMS = await httpClient.post(`${ms_url}/verify-token`, {
    token
  });

  if (requestToAuthMS.body.isValid) {
    const userRepository = makeDbUserRepository()
    const user = await userRepository.findByID(requestToAuthMS.body.id);
    if(!user) return res.status(401).json({
      error: 'Unauthorized'
    })
    req.user = user;
    return next();
  }

  return res.status(403).json({
    error: 'Access Denied'
  });
}