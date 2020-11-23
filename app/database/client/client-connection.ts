import { Connection, ConnectionOptions } from 'typeorm';

export interface ClientConnection {
  name: string;

  option: ConnectionOptions;

  postConnection: (connection: Connection) => Promise<void>;
}

export default ClientConnection;
