import 'reflect-metadata';

import readline from 'readline';
import { run, close } from './app';
import { logger } from './util/logger';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = async (message: string) => {
  switch (message) {
    case 'stop': case 'exit':
      await close();

      process.exit(0);
      break;
    case 'help':
      logger.info(`
        stop, exit - Stop citrus server
        help - Show all commands
      `);
      break;
    default:
      logger.error(`Invalid command ${message}. If you want to all command, type [help]`);
      break;
  }

  rl.question('> ', question);
};

rl.question('> ', question);

run().then();

process.on('SIGINT', async () => {
  await close();

  process.exit(0);
});
