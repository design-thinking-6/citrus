import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { createQuestion } from '../function/create-question';

export const createQuestionMiddleware = createMiddleware(
  async (ctx, body, id, password) => createQuestion({ id, password }, body),
  [
    Parameter.BODY,
    Parameter.PARAMS('user_id'),
    Parameter.PARAMS('password'),
  ],
  Response.BODY(201),
);

export default {
  createQuestionMiddleware,
};
