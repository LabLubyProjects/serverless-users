import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import path from 'path';

export default (app: Express): void => {
  const router = Router();
  readdirSync(path.join(__dirname, '../routes')).map(async (file) => {
    (await import(`../routes/${file}`)).default(router);
  });
}