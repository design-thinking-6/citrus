import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { QuestionDataMode, QuestionDataType, updateQuestionData } from '../function/update-question-data';

export const updateQuestionDataMiddleware = (type: QuestionDataType, mode: QuestionDataMode) => createMiddleware(
  async (ctx, id, password, questionId) => updateQuestionData({ id, password }, questionId, type, mode),
  [
    Parameter.PARAMS('user_id'),
    Parameter.PARAMS('password'),
    Parameter.PARAMS('question_id'),
  ],
  Response.BODY(200),
);

export default {
  updateQuestionDataMiddleware,
};
