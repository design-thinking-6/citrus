import { createMiddleware } from '../../../app/middleware/create-middleware';
import { checkValidUser } from '../../user/function/check-valid-user';
import { getUser } from '../../user/function/get-user';
import { Response } from '../../../app/middleware/response';

export const validateAuthorizeUser = createMiddleware(
  async (ctx) => {
    await checkValidUser(ctx.token.id, ctx.token.password);

    return getUser(ctx.token.id, ctx.token.password);
  },
  [],
  Response.CONTEXT('authoriedUser'),
);

export default validateAuthorizeUser;
