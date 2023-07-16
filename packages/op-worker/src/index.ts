export * from './lib/op-worker';

import { Listing } from '@./types2';

const a:Listing = {
    name: 'da',
    description: 'sdad'
}

let count = 0;

const run = () => {
    console.log('working ', count++ );
    setTimeout( run, 5000 );
}

run();