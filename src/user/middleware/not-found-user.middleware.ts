import { createMiddleware } from '../../../app/middleware/create-middleware';
import { NotFound } from '../../../app/error/not-found';

export const notFoundUserMiddleware = createMiddleware(
  async (ctx) => {
    if (!ctx.user) {
      throw new NotFound('User not exist');
    }
  },
  [],
  null,
);

export default notFoundUserMiddleware;
