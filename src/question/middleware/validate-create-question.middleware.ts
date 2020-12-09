import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { BadRequest } from '../../../app/error/bad-request';
import { CreatableQuestionInfoSchema } from '../schema/request/creatable-question-info.schema';

export const validateCreateQuestion = createMiddleware(
  async (ctx, body) => {
    try {
      await CreatableQuestionInfoSchema.validateAsync(body);
    } catch (err) {
      throw new BadRequest(`Bad request: ${err}`);
    }
  },
  [
    Parameter.BODY,
  ],
  null,
);

export default {
  validateCreateQuestion,
};
