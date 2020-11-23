import Router from 'koa-router';

import { get } from './router-register';

const router = new Router();

router.prefix('/v1/');

get().forEach((r) => {
  router.use(r.routes(), r.allowedMethods());
});

export default router;
