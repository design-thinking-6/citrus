export type TransportType = 'console' | 'file';

export type LoggerTransport = {
  type: TransportType,
  filename?: string,
  level: string
};

export default LoggerTransport;
