import { getCustomRepository } from 'typeorm';
import { CreatableQuestionInfo } from '../schema/creatable-question-info';
import { checkValidUser } from '../../user/function/check-valid-user';
import { QuestionRepository } from '../model/question-repository';
import { Question } from '../model/question';
import { QuestionType } from '../model/question-type';
import { Hint } from '../model/hint';
import { Flow } from '../model/flow';
import { isAdminUser } from '../../user/function/is-admin-user';
import { Unauthorized } from '../../../app/error/unauthorized';

export async function createQuestion({ id, password }, questionInfo: CreatableQuestionInfo) {
  await checkValidUser(id, password);

  if (!await isAdminUser(id, password)) throw new Unauthorized('This user is not admin');

  const questionRepository = getCustomRepository(QuestionRepository);

  const question = new Question();
  question.code = questionInfo.id;
  question.difficult = questionInfo.difficult;
  question.score = questionInfo.score;
  question.answer = questionInfo.answer;
  question.type = questionInfo.type === 'subjective' ? QuestionType.SUBJECTIVE : QuestionType.OBJECTIVE;

  question.hints = questionInfo.hints.map(({ time, value }) => {
    const hint = new Hint();
    hint.time = time;
    hint.value = value;

    return hint;
  });

  question.flows = questionInfo.flows.map((flowInfo) => {
    const flow = new Flow();
    flow.values = flowInfo;

    return flow;
  });

  return questionRepository.save(question);
}

export default createQuestion;
