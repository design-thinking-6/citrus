import { ConfigBuilder, JsonSource } from 'conev-sync';

import { register, getConfig } from './get-configs';

import basic from './basic.json';
import dev from './dev.json';
import stg from './stg.json';
import { deepMerge } from '../deepmerge';

function get() {
  const configBuilder = new ConfigBuilder();
  const jsonSource = new JsonSource();

  register('dev', dev);
  register('stg', stg);
  register('citrus', './citrus.json');

  const citrus = getConfig('citrus');
  for (const [key, value] of getConfig()) {
    if (key !== 'citrus') {
      const v = deepMerge(basic, value, citrus);

      jsonSource.set(key, v);
    }
  }

  configBuilder.addEnv('stg', 'dev', 'basic');
  configBuilder.addSource(jsonSource);

  const config = configBuilder.build();
  config.sync();

  return config.get() as any;
}

const config = get();

function postProcess() {
  let { transports } = config.logger;
  transports = transports.slice(0, transports.length / 2);

  config.logger.transports = transports;
}

postProcess();

export default config;
