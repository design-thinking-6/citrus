import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import router from './router';

const app = new Koa();

app.use(bodyParser({
  enableTypes: ['json'],
}));

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
