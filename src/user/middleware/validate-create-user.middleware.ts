import { createMiddleware } from '../../../app/middleware/create-middleware';
import { CreatableUserInfo } from '../schema/creatable-user-info';
import { Parameter } from '../../../app/middleware/parameter';
import { CreatableUserInfoSchema } from '../schema/request/creatable-user-info.schema';
import { BadRequest } from '../../../app/error/bad-request';

export const validateCreateUser = createMiddleware(
  async (ctx, userInfo: CreatableUserInfo) => {
    try {
      await CreatableUserInfoSchema.validateAsync(userInfo);
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
  validateCreateUser,
};
