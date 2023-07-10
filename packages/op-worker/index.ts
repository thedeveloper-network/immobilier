import * as dotenv from 'dotenv';
dotenv.config();

import { Queue, Worker } from 'bullmq';



const os = require('os');
const winston = require('winston');
require('winston-syslog');

const papertrail = new winston.transports.Syslog({
  host: 'logs4.papertrailapp.com',
  port: 43924,
  protocol: 'tls4',
  localhost: os.hostname(),
  eol: '\n',
});

const logger = winston.createLogger({
  format: winston.format.simple(),
  levels: winston.config.syslog.levels,
  transports: [papertrail],
});


console.log('host', process.env.REDIS_HOST, process.env.REDIS_PORT );

const worker = new Worker('immo:work', async (job)=>{
    logger.info(`${job.id} started`);
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
    logger.info(`${job.id} has completed!`);
});