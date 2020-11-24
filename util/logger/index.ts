import createLogger from './logger';

import config from '../config';

export const logger = createLogger(config.logger);

export default logger;
