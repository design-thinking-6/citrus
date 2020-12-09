import Router from 'koa-router';
import { validateCreateQuestion } from '../middleware/validate-create-question.middleware';
import { createQuestionMiddleware } from '../middleware/create-question.middleware';
import { updateQuestionMiddleware } from '../middleware/update-question.middleware';
import { validateUpdateQuestion } from '../middleware/validate-update-question.middleware';
import { validateGetAllQuestion, validateGetQuestion } from '../middleware/validate-get-question.middleware';
import { getQuestionMiddleware } from '../middleware/get-question.middleware';
import { getRecommandQuestionMiddleware } from '../middleware/get-recommand-question.middleware';

const router = new Router();

router.post('/questions/:user_id/:password', validateCreateQuestion, createQuestionMiddleware);
router.patch('/questions/:user_id/:password/:question_id', validateUpdateQuestion, updateQuestionMiddleware);

router.get('/questions/:user_id/:password/recommand', getRecommandQuestionMiddleware);

router.get('/questions', validateGetAllQuestion, getQuestionMiddleware);
router.get('/questions/:question_id', validateGetQuestion, getQuestionMiddleware);

export default router;
