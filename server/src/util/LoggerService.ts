import winston from 'winston';

export class LoggerService {
    private logger = winston.createLogger({
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({filename: './logs/error.log', level: 'error'}),
            new winston.transports.File({ filename: './logs/all.log' }),
        ],
    })

    //Level 0
    error(msg: any) {
        this.logger.error({
            timeStamp: new Date().toLocaleString(),
            message: msg,
        })
    }

    //Level 1
    warn(msg: any) {
        this.logger.warn({
            timeStamp: new Date().toLocaleString(),
            message: msg,
        })
    }

    //Level 2
    info(msg: any) {
        this.logger.info({
            timeStamp: new Date().toLocaleString(),
            message: msg,
        })
    }

    //Level 3
    http(msg: any) {
        this.logger.http({
            timeStamp: new Date().toLocaleString(),
            message: msg,
        })
    }

    //Level 4
    verbose(msg: any) {
        this.logger.verbose({
            timeStamp: new Date().toLocaleString(),
            message: msg,
        })
    }

    //Level 5
    debug(msg: any) {
        this.logger.debug({
            timeStamp: new Date().toLocaleString(),
            message: msg,
        })
    }


}