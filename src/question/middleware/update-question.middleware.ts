import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { updateQuestion } from '../function/update-question';

export const updateQuestionMiddleware = createMiddleware(
  async (ctx, body, id, password, questionId) => updateQuestion({ id, password }, questionId, body),
  [
    Parameter.BODY,
    Parameter.PARAMS('user_id'),
    Parameter.PARAMS('password'),
    Parameter.PARAMS('question_id'),
  ],
  Response.BODY(201),
);

export default {
  updateQuestionMiddleware,
};
