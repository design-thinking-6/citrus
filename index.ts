import { run, close } from './app';

run().then();

process.on('SIGINT', async () => {
  await close();

  process.exit(0);
});
