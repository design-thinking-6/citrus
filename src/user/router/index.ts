import Router from 'koa-router';

import { validateCreateUser } from '../middleware/validate-create-user.middleware';
import { createUserMiddleware } from '../middleware/create-user.middleware';

import { validateGetAllUser, validateGetUser } from '../middleware/validate-get-user.middleware';
import {
  getAllUserMiddleware,
  getAuthorizedUserMiddleware,
  getUserMiddleware
} from '../middleware/get-user.middleware';

import {
  removeManyUserPrivateMiddleware,
  removeUserPrivateMiddleware,
} from '../middleware/remove-user-private.middleware';

import { validateUpdateUser } from '../middleware/validate-update-user.middleware';
import { updateUserMiddleware } from '../middleware/update-user.middleware';
import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Response } from '../../../app/middleware/response';
import { updateQuestionDataMiddleware } from '../middleware/update-question-data.middleware';

const returnResponse = (status: number) => createMiddleware((ctx) => ctx.user, [], Response.BODY(status));

const router = new Router();

router.post('/users', validateCreateUser, createUserMiddleware, returnResponse(201));
router.get('/users', validateGetAllUser, getAllUserMiddleware, removeManyUserPrivateMiddleware());

router.get('/users/:user_id', validateGetUser, getUserMiddleware, removeUserPrivateMiddleware());
router.get('/users/:user_id/:password', validateGetUser, getAuthorizedUserMiddleware, returnResponse(200));
router.patch('/users/:user_id/:password', validateUpdateUser, updateUserMiddleware, returnResponse(200));

router.put(
  '/users/:user_id/:password/questions/:question_id/mistake',
  updateQuestionDataMiddleware('mistake', 'create'),

);
router.put(
  '/users/:user_id/:password/questions/:question_id/correct',
  updateQuestionDataMiddleware('correct', 'create'),
);

router.delete(
  '/users/:user_id/:password/questions/:question_id/mistake',
  updateQuestionDataMiddleware('mistake', 'delete'),
);
router.delete(
  '/users/:user_id/:password/questions/:question_id/correct',
  updateQuestionDataMiddleware('correct', 'delete'),
);

export default router;
