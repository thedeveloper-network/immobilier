import * as dotenv from 'dotenv';
dotenv.config();

import { Queue, Worker } from 'bullmq';

console.log('host', process.env.REDIS_HOST, process.env.REDIS_PORT );

const worker = new Worker('immo:work', async (job)=>{
    await new Promise( ( res ) => {
        setTimeout( () => res(true), 2000 );
    });

}, { connection: {
    host: process.env.REDIS_HOST,
    port: Number( process.env.REDIS_PORT ),
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASS
}});

worker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});