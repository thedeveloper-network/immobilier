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

const info = ( message:string|object ) => {
    if( process.env.ENV == 'dev'){
        console.log( message );
    } else {
        logger.info( message );
    }
};

const warn = ( message: string|object ) => {
    if( process.env.ENV == 'dev'){
        console.warn( message );
    } else {
        logger.warn( message );
    }
}
export {
    warn
}

export default info;