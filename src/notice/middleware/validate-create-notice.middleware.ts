import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { BadRequest } from '../../../app/error/bad-request';
import { CreatableNoticeInfoSchema } from '../schema/request/creatable-notice-info.schema';

export const validateCreateNoticeMiddleware = createMiddleware(
  async (ctx, body) => {
    try {
      await CreatableNoticeInfoSchema.validateAsync(body);
    } catch (err) {
      throw new BadRequest(`Bad request: ${err}`);
    }
  },
  [
    Parameter.BODY,
  ],
  null,
);

export default {
  validateCreateNoticeMiddleware,
};
