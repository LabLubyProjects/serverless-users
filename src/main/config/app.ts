import express from 'express';
import setupApp from './setup';

const app = express();
setupApp(app);
app.listen(3000, ()=>console.log('listening'))
export default app;