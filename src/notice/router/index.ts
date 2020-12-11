import Router from 'koa-router';

import { validateCreateNoticeMiddleware } from '../middleware/validate-create-notice.middleware';
import { createNoticeMiddleware } from '../middleware/create-notice.middleware';
import { deleteNoticeMiddleware } from '../middleware/delete-notice.middleware';
import { getNoticeMiddleware } from '../middleware/get-notice.middleware';

const router = new Router();

router.post('/notices/:user_id/:password', validateCreateNoticeMiddleware, createNoticeMiddleware);
router.delete('/notices/:user_id/:password/:notice_id', deleteNoticeMiddleware);
router.get('/notices', getNoticeMiddleware);

export default router;
