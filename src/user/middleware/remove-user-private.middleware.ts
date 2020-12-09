import { createMiddleware } from '../../../app/middleware/create-middleware';
import { removePrivate } from '../function/remove-private';
import { Response } from '../../../app/middleware/response';

export const removeUserPrivateMiddleware = (status = 200) => createMiddleware(
  (ctx) => removePrivate(ctx.user),
  [],
  Response.BODY(status),
);

export const removeManyUserPrivateMiddleware = (status = 200) => createMiddleware(
  async (ctx) => Promise.all(ctx.users.map(removePrivate)),
  [],
  Response.BODY(status),
);

export default {
  removeUserPrivateMiddleware,
  removeManyUserPrivateMiddleware,
};
