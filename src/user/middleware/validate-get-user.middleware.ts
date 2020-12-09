import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';

export const validateGetUser = createMiddleware(
  async (ctx, userId) => {
    if (!userId) throw new Error('User id must be not null');
  },
  [
    Parameter.PARAMS('user_id'),
  ],
  null,
);
export const validateGetAllUser = createMiddleware(
  async () => {},
  [
  ],
  null,
);

export default {
  validateGetUser,
  validateGetAllUser,
};
