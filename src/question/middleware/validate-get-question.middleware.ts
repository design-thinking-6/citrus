import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { BadRequest } from '../../../app/error/bad-request';

export const validateGetQuestion = createMiddleware(
  async (ctx, id) => {
    if (!id) throw new BadRequest('Bad request: Question id must be not null');
  },
  [
    Parameter.PARAMS('question_id'),
  ],
  null,
);

export const validateGetAllQuestion = createMiddleware(
  async () => {},
  [
  ],
  null,
);

export default {
  validateGetQuestion,
  validateGetAllQuestion,
};
