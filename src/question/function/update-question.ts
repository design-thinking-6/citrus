import { getCustomRepository } from 'typeorm';
import { checkValidUser } from '../../user/function/check-valid-user';
import { QuestionRepository } from '../model/question-repository';
import { QuestionType } from '../model/question-type';
import { Hint } from '../model/hint';
import { Flow } from '../model/flow';
import { isAdminUser } from '../../user/function/is-admin-user';
import { Unauthorized } from '../../../app/error/unauthorized';
import { ModifiableQuestionInfo } from '../schema/modifiable-question-info';
import { Forbidden } from '../../../app/error/forbidden';

export async function updateQuestion({ id, password }, questionId: string, questionInfo: ModifiableQuestionInfo) {
  await checkValidUser(id, password);

  if (!await isAdminUser(id, password)) throw new Unauthorized('This user is not admin');

  const questionRepository = getCustomRepository(QuestionRepository);

  if (!await questionRepository.count({ code: questionId })) throw new Forbidden(`Question id "${questionId}" is not exist`);

  const question = await questionRepository.findOne({ code: questionId });
  if (questionInfo.difficult) question.difficult = questionInfo.difficult;
  if (questionInfo.score) question.score = questionInfo.score;
  if (questionInfo.answer) question.answer = questionInfo.answer;
  if (questionInfo.type) question.type = questionInfo.type === 'subjective' ? QuestionType.SUBJECTIVE : QuestionType.OBJECTIVE;

  if (questionInfo.hints) {
    question.hints = questionInfo.hints.map(({ time, value }) => {
      const hint = new Hint();
      hint.time = time;
      hint.value = value;

      return hint;
    });
  }

  if (questionInfo.flows) {
    question.flows = questionInfo.flows.map((flowInfo) => {
      const flow = new Flow();
      flow.values = flowInfo;

      return flow;
    });
  }

  return questionRepository.save(question);
}

export default updateQuestion;
