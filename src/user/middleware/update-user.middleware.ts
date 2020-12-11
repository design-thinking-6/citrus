import { createMiddleware } from '../../../app/middleware/create-middleware';
import { createUser } from '../function/create-user';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { CreatableUserInfo } from '../schema/creatable-user-info';
import { ModifiableUserInfo } from '../schema/modifiable-user-info';
import { updateUser } from '../function/update-user';

export const updateUserMiddleware = createMiddleware(
  async (ctx, body: ModifiableUserInfo, id, password) => updateUser({ id, password }, body),
  [
    Parameter.BODY,
    Parameter.PARAMS('user_id'),
    Parameter.PARAMS('password'),
  ],
  Response.CONTEXT('user'),
);

export default {
  updateUserMiddleware,
};
