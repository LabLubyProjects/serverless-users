import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default (app: Express): void => {
  const router = Router();
  app.use(router);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  readdirSync(path.join(__dirname, '../routes')).map(async (file) => {
    (await import(`../routes/${file}`)).default(router);
  });
}