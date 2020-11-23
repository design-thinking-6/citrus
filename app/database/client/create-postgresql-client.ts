import { Connection, ConnectionOptions } from 'typeorm';

import { ClientConnection } from './client-connection';

export async function createPostgreSQLClient(config: any): Promise<ClientConnection> {
  const option: ConnectionOptions = {
    type: 'postgres',
    host: config?.host ?? 'localhost',
    port: config?.port ?? 5432,
    username: config?.username ?? 'postgres',
    password: config?.password ?? 'password',
    database: config?.database ?? 'postgres',
  };

  const postConnection = async (connection: Connection) => {
    await connection.synchronize();
  };

  return {
    name: 'postgres',
    option,
    postConnection,
  };
}

export default {
  createPostgreSQLClient,
};
