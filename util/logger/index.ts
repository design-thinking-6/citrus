import createLogger, { LoggerConfig } from './logger';

import config from '../config';

export default createLogger(config.logger as LoggerConfig);
