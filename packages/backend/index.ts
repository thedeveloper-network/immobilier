import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import testRoutes from './routes/test';

dotenv.config();

import { initDB } from './db/dbConnect';

const app: Express = express();
const port = process.env.PORT;

const init = async () => {
  await initDB();

  app.get('/', (req: Request, res: Response) => {
    res.header('Content-type', 'application/json');
    res.send({
        message: 'We are now really in BUSINESS!'
    });
  });

  app.use( testRoutes );

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

init();

