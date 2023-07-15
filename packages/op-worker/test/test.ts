import * as dotenv from 'dotenv';
import { Queue, Worker } from 'bullmq';
dotenv.config();
import log from '../lib/logger';

//log(`env ${process.env.REDIS_USER}, ${process.env.REDIS_PASS}`);

try {
    const queue = new Queue('immo:work', { connection: {
        host: process.env.REDIS_HOST,
        port: Number( process.env.REDIS_PORT ),
        username: '',// process.env.REDIS_USER,
        password: '',// process.env.REDIS_PASS
    }});
    async function addJobs() {
        const j1 = await queue.add('myJobName1', { foo: 'bar' });
        log( `added job ${j1.id}` );
        const j2 = await queue.add('myJobName2', { qux: 'baz' });
        log( `added job ${j2.id}` );
        process.exit();
    }

    queue.on('resumed', () => {
        log('queue started');
    })
      
    addJobs();    
} catch( e ){
    console.error( e );
}

