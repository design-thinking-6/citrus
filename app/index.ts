import logger from '../util/logger';

import app from './app';
import config from '../util/config';

export default async (): Promise<void> => {
  logger.info('citrus started');

  app.listen(config.server.port);
};
