import { NextFunction, Request, Response } from "express";
import { HttpRequest } from "../../presentation/protocols/http";

export class ExpressAdapter {
  static adapt(func: Function) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { body, params, headers, query, user } = req;
        const httpRequest: HttpRequest = { body, params, headers, query, user };
        const httpResponse = await func(httpRequest);
        return res.status(httpResponse.statusCode).json(httpResponse.body);
      } catch (error) {
        next(error);
      }
    }
  }
}