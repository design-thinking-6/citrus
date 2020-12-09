import { createMiddleware } from '../../../app/middleware/create-middleware';
import { CreatableUserInfo } from '../schema/creatable-user-info';
import { Parameter } from '../../../app/middleware/parameter';
import { ModifiableUserInfoSchema } from '../schema/request/modifiable-user-info.schema';
import { BadRequest } from '../../../app/error/bad-request';

export const validateUpdateUser = createMiddleware(
  async (ctx, userInfo: CreatableUserInfo) => {
    try {
      await ModifiableUserInfoSchema.validateAsync(userInfo);
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
  validateUpdateUser,
};
