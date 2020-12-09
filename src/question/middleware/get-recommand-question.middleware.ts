import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { getRecommandQuestion } from '../function/get-recommand-question';

export const getRecommandQuestionMiddleware = createMiddleware(
  async (ctx, id, password) => getRecommandQuestion({ id, password }, 5),
  [
    Parameter.PARAMS('user_id'),
    Parameter.PARAMS('password'),
  ],
  Response.BODY(200),
);

export default {
  getRecommandQuestionMiddleware,
};
