import { Express } from "express"
import { bodyParser } from "../middlewares/body-parser"
import { contentType } from "../middlewares/content-type";
import { cors } from "../middlewares/cors";
import { errorHandler } from "../middlewares/error-handler";

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
  app.use(errorHandler);
}