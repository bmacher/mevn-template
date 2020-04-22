import express from 'express';
import cors from 'cors';
import { sayHello } from '@mevn/common';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(sayHello('World'));
});

export { app };
