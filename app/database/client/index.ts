import { createConnections } from 'typeorm';

import { createPostgreSQLClient } from './create-postgresql-client';
import config from '../../../util/config';

export async function createClient() {
  const postgresConfig = await createPostgreSQLClient(config.database.postgres);

  const [postgres] = await createConnections([postgresConfig.option]);

  return {
    postgres,
  };
}

export default {
  createClient,
};
