import * as dotenv from 'dotenv';
import { Queue, Worker } from 'bullmq';
import path from 'path';

dotenv.config();

const queue = new Queue('immo:work', { connection: {
    host: process.env.REDIS_HOST,
    port: Number( process.env.REDIS_PORT ),
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASS
}});

async function addJobs() {
    await queue.add('myJobName1', { foo: 'bar' });
    await queue.add('myJobName2', { qux: 'baz' });
    console.log('jobs have been produced');

    process.exit();
}
  
addJobs();