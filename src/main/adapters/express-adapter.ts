import { Request, Response } from "express";
import { Controller } from "../../presentation/protocols/controller";
import { HttpRequest } from "../../presentation/protocols/http";

export class ExpressAdapter {
  static adapt(controller: Controller): Function {
    return async (req: Request, res: Response) => {
      const { body, params } = req;
      const httpRequest: HttpRequest = { body, params };
      const httpResponse = await controller.handle(httpRequest);
      return res.status(httpResponse.statusCode).json(httpResponse.body);
    }
  }
}