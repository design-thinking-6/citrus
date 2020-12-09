import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { BadRequest } from '../../../app/error/bad-request';
import { ModifiableQuestionInfoSchema } from '../schema/request/modifiable-question-info.schema';

export const validateUpdateQuestion = createMiddleware(
  async (ctx, body) => {
    try {
      await ModifiableQuestionInfoSchema.validateAsync(body);
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
  validateUpdateQuestion,
};
