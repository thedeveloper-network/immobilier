import * as dotenv from 'dotenv';
dotenv.config();
import { Queue, Worker } from 'bullmq';
import log from './lib/logger';

const worker = new Worker('immo:work', async (job)=>{
    log( `${job.id} started`);
    await new Promise( ( res ) => {
        setTimeout( () => res(true), 2000 );
    });

}, { connection: {
    host: process.env.REDIS_HOST,
    port: Number( process.env.REDIS_PORT ),
    username: process.env.ENV=='dev'? '' : process.env.REDIS_USER,
    password: process.env.ENV=='dev'? '' : process.env.REDIS_PASS
}} );
worker.on('ready', () => {
  log('connected');
});

worker.on('completed', job => {
    log(`${job.id} has completed!`);
});