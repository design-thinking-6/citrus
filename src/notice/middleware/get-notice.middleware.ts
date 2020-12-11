import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Response } from '../../../app/middleware/response';
import { getNotice } from '../function/get-notice';

export const getNoticeMiddleware = createMiddleware(
  async (ctx) => getNotice(),
  [
  ],
  Response.BODY(200),
);

export default {
  getNoticeMiddleware,
};
