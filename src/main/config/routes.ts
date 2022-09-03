import { Express, Router } from 'express';
import { UserController } from '../../presentation/controllers/user/user-controller';
import { ExpressAdapter } from '../adapters/express-adapter';
import { auth } from "../middlewares/auth";


export default (app: Express): void => {
  const router = Router();
  router.post('/users', ExpressAdapter.adapt(UserController.createUser));
  router.put('/users/:id', auth, ExpressAdapter.adapt(UserController.updateUser));
  router.get('/users/:id', auth, ExpressAdapter.adapt(UserController.findUserByID));
  router.get('/users', auth, ExpressAdapter.adapt(UserController.findAllUsers));
  router.delete('/users/:id', auth, ExpressAdapter.adapt(UserController.deleteUser));
  router.get('/test-auth', auth, ExpressAdapter.adapt(UserController.testAuth));
  app.use(router);
}