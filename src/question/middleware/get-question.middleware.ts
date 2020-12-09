import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { getQuestion } from '../function/get-question';

export const getQuestionMiddleware = createMiddleware(
  async (ctx, questionId) => getQuestion(questionId),
  [
    Parameter.PARAMS('question_id'),
  ],
  Response.BODY(200),
);

export default {
  getQuestionMiddleware,
};
