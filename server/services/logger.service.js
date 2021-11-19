const winston = require('winston');
const dotenv = require('dotenv');
dotenv.config();
var fs = require('fs');

// checking if log dir exist
var path = require('path');
var logDir = 'logs'; // directory path for logs
if (!fs.existsSync(logDir)) {
    // Create the directory if it does not exist
    fs.mkdirSync(logDir);
}

// setting dateFormat
const dateFormat = () => {
    return new Date(Date.now()).toLocaleString();
}

// Logger Service
class LoggerService {
    constructor(route) {

        this.route = route;

        const logger = winston.createLogger({
            level: 'info',
            format: winston.format.printf(info => {
                let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message}`;
                message = info.obj ? message + `data ${JSON.stringify(info.obj)} | ` : message;
                return message;
            }),
            transports: [
                //   new transports.File({ filename: path.join(logDir, `error.log`), level: 'error' }),
                new winston.transports.File({
                    filename: `${process.env.LOG_FILE_PATH}/${route}.error.log`,
                    level: 'error'
                }),
                new winston.transports.File({
                    filename: `${process.env.LOG_FILE_PATH}/${route}.combined.log`
                }),
                new winston.transports.File({
                    filename: `${process.env.LOG_FILE_PATH}/${route}.load-test.log`,
                    level: 'load-test'
                }),
            ]
        });
        this.logger = logger;

        //
        // If we're not in production then **ALSO** log to the `console`
        // with the colorized simple format.
        //
        if (process.env.NODE_ENV !== 'production') {
            this.logger.add(
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                })
            );
        }
    }


    // info log
    async info(message) { this.logger.log('info', message) };
    async info(message, obj) { this.logger.log('info', message, { obj }) };

    // error log
    async error(message) { this.logger.log('error', message) };
    async error(message, obj) { this.logger.log('error', message, { obj }) };

    // load-test log
    async loadTest(message) { this.logger.log('load-test', message) };
    async loadTest(message, obj) { this.logger.log('load-test', message, { obj }) };

    // debug log
    // async debug(message) { this.logger.log('debug', message) };
    // async debug(message, obj) { this.logger.log('debug', message, { obj }) };

}

module.exports = LoggerService;