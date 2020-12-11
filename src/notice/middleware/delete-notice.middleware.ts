import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Response } from '../../../app/middleware/response';
import { deleteNotice } from '../function/delete-notice';
import { Parameter } from '../../../app/middleware/parameter';

export const deleteNoticeMiddleware = createMiddleware(
  async (ctx, noticeId, id, password) => deleteNotice({ id, password }, noticeId),
  [
    Parameter.PARAMS('notice_id'),
    Parameter.PARAMS('user_id'),
    Parameter.PARAMS('password'),
  ],
  Response.BODY(204),
);

export default {
  deleteNoticeMiddleware,
};
