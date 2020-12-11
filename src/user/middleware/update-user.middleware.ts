import { createMiddleware } from '../../../app/middleware/create-middleware';
import { createUser } from '../function/create-user';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { CreatableUserInfo } from '../schema/creatable-user-info';
import { ModifiableUserInfo } from '../schema/modifiable-user-info';
import { updateUser } from '../function/update-user';

export const updateUserMiddleware = createMiddleware(
  async (ctx, body: ModifiableUserInfo) => updateUser({ id: ctx.token.id, password: ctx.token.password }, body),
  [
    Parameter.BODY,
  ],
  Response.CONTEXT('user'),
);

export default {
  updateUserMiddleware,
};
