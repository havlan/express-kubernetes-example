const winston = require('winston')
const appRoot = require('app-root-path');
const fs = require('fs');
const path = require('path');

const logDir = '/var/log/express-k8s-example';

if(!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const options = {
    file: {
        level: 'info',
        filename: path.join(logDir, '/express-example-app.log'),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    /*
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
    */
};

// log to file setup
const logger = winston.createLogger({
    transports: [
        //new winston.transports.Console(options.console),
        new winston.transports.File(options.file)
    ],
    exitOnError: false,
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};


module.exports = logger;