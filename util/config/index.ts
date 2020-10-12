import { ConfigBuilder, JsonSource } from 'conev-sync';

import basic from './basic.json';
import dev from './dev.json';
import stg from './stg.json';

const configBuilder = new ConfigBuilder();
const jsonSource = new JsonSource();

jsonSource.set('basic', basic);
jsonSource.set('dev', dev);
jsonSource.set('stg', stg);

configBuilder.addEnv('stg', 'dev', 'basic');
configBuilder.addSource(jsonSource);

export const configObject = configBuilder.build();
configObject.sync();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default configObject.get() as any;
