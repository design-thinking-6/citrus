import { createMiddleware } from '../../../app/middleware/create-middleware';
import { createUser } from '../function/create-user';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { CreatableUserInfo } from '../schema/creatable-user-info';

export const createUserMiddleware = createMiddleware(
  async (ctx, body: CreatableUserInfo) => createUser(body),
  [
    Parameter.BODY,
  ],
  Response.CONTEXT('user'),
);

export default {
  createUserMiddleware,
};
