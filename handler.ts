import serverless from 'serverless-http';
import app from './src/main/config/app';

export const handler = serverless(app);
