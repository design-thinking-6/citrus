import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { getUser } from '../function/get-user';

export const getAuthorizedUserMiddleware = createMiddleware(
  async (ctx, userId: string, password: string) => getUser(userId, password),
  [
    Parameter.PARAMS('user_id'),
    Parameter.PARAMS('password'),
  ],
  Response.CONTEXT('user'),
);

export const getUserMiddleware = createMiddleware(
  async (ctx, userId?: string) => getUser(userId),
  [
    Parameter.PARAMS('user_id'),
  ],
  Response.CONTEXT('user'),
);

export const getAllUserMiddleware = createMiddleware(
  async () => getUser(),
  [
  ],
  Response.CONTEXT('users'),
);

export default {
  getAuthorizedUserMiddleware,
  getUserMiddleware,
  getAllUserMiddleware,
};
