import Router from 'koa-router';

import userRouter from '../../src/user/router';
import questionRouter from '../../src/question/router';
import noticeRouter from '../../src/notice/router';

const router = new Router();

router.prefix('/v1/');

router.use(userRouter.routes(), userRouter.allowedMethods());
router.use(questionRouter.routes(), questionRouter.allowedMethods());
router.use(noticeRouter.routes(), noticeRouter.allowedMethods());

export default router;
