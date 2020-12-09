import { Connection } from 'typeorm';
import { logger } from '../util/logger';

import app from './app';
import config from '../util/config';
import { createClient } from './database/client';

import { CitrusErrors } from './error/errors';

let databaseClients: Record<string, Connection>;

export async function run(): Promise<void> {
  logger.info('Citrus starting...');

  logger.info('Try to connecting database...');

  try {
    databaseClients = await createClient();
    logger.info('Database Connected!');
  } catch (err) {
    logger.error(`Failed to connect database. Check your database environment: ${JSON.stringify(config.database, null, 2)}`);
    logger.error(err.stack);

    process.exit(CitrusErrors.DATABASE_CONNECTION_FAILED);
  }

  logger.info(`Citrus started at ${config.server.port}`);
  app.listen(config.server.port);
}

export async function close() {
  logger.info('Citrus stopping...');

  logger.info('Try to closing database connection...');

  try {
    await Promise.all(
      Object.entries(databaseClients).map(async ([, connection]) => connection.close()),
    );

    logger.info('Database closed');
  } catch (err) {
    logger.error('Failed to closing database. Your PC may have some memory leak');
    logger.error(err.stack);

    process.exit(CitrusErrors.DATABASE_DISCONNECTION_FAILED);
  }

  logger.info('Citrus stopped');
}

export default {
  run,
  close,
};
