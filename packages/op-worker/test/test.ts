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
    const j1 = await queue.add('myJobName1', { foo: 'bar' });
    console.log( `added job ${j1.id}` );
    const j2 = await queue.add('myJobName2', { qux: 'baz' });
    console.log( `added job ${j2.id}` );

    process.exit();
}
  
addJobs();