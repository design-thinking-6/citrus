import { Connection, ConnectionOptions } from 'typeorm';

import { ClientConnection } from './client-connection';

import { User } from '../../../src/user/model/user';
import { Profile } from '../../../src/user/model/profile';
import { Question } from '../../../src/question/model/question';
import { Hint } from '../../../src/question/model/hint';
import { Flow } from '../../../src/question/model/flow';

const entities = [
  User, Profile,
  Question, Hint, Flow,
];

export async function createPostgreSQLClient(config: any): Promise<ClientConnection> {
  const option: ConnectionOptions = {
    type: 'postgres',
    host: config?.host ?? 'localhost',
    port: config?.port ?? 5432,
    username: config?.username ?? 'postgres',
    password: config?.password ?? 'password',
    database: config?.database ?? 'postgres',
    entities,
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
