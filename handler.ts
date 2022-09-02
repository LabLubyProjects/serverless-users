import serverless from 'serverless-http';
import express from 'express';

const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root123!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
