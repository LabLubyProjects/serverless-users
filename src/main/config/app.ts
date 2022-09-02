import express from 'express';
import setupMiddlewares from './middlewares';
import setupRoutes from './routes';

const app = express();
setupMiddlewares(app);
setupRoutes(app);

app.listen(3000, () => console.log("server running on port 3000"))

export default app;