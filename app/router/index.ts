import Router from 'koa-router';

import userRouter from '../../src/user/router';

const router = new Router();

router.prefix('/v1/');

router.use(userRouter.routes(), userRouter.allowedMethods());

export default router;
