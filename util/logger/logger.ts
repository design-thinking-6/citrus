import winston, { Logger } from 'winston';
import 'winston-daily-rotate-file';

import { LoggerTransport } from './transport';

export type LoggerConfig = {
  transports: LoggerTransport[],
};

const format = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(
    ({ level, message, timestamp }) => `${timestamp} [${level}] ${message}`,
  ),
);

export default function createLogger(loggerConfig: LoggerConfig): Logger {
  const transports = [
    ...loggerConfig.transports.map(({ type, filename, level }) => {
      switch (type) {
        case 'file':
          return new winston.transports.DailyRotateFile({
            filename: `${filename ?? 'log'}-%DATE%.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
          });
        case 'console':
          return new winston.transports.Console({
            level,
            format,
          });
        default:
          throw new Error('transport index type must be FILE or CONSOLE');
      }
    }),
  ];

  return winston.createLogger({
    transports,
    exitOnError: false,
  });
}
