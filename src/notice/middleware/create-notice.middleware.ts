import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { createNotice } from '../function/create-notice';

export const createNoticeMiddleware = createMiddleware(
  async (ctx, body, id, password) => createNotice({ id, password }, body),
  [
    Parameter.BODY,
    Parameter.PARAMS('user_id'),
    Parameter.PARAMS('password'),
  ],
  Response.BODY(201),
);

export default {
  createNoticeMiddleware,
};
