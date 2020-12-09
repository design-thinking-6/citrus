import { getCustomRepository } from 'typeorm';
import { checkValidUser } from './check-valid-user';
import { QuestionRepository } from '../../question/model/question-repository';
import { UserRepository } from '../model/user-repository';
import { Forbidden } from '../../../app/error/forbidden';
import { MistakeQuestionData } from '../model/mistake-question-data';
import { CorrectQuestionData } from '../model/correct-question-data';

export type QuestionDataType = 'mistake' | 'correct';
export type QuestionDataMode = 'delete' | 'create';

export async function updateQuestionData({ id, password }, questionId: string, type: QuestionDataType, mode: QuestionDataMode) {
  await checkValidUser(id, password);

  const questionRepository = getCustomRepository(QuestionRepository);
  const userRepository = getCustomRepository(UserRepository);

  if (await questionRepository.count({ code: questionId }) === 0) throw new Forbidden(`Question id "${questionId}" is not exist`);

  const user = await userRepository.findOne({ username: id, password }, { relations: ['profile', 'mistakeQuestionDataset', 'correctQuestionDataset'] });
  const question = await questionRepository.findOne({ code: questionId }, { relations: ['flows'] });

  if (mode === 'create') {
    if (type === 'mistake') {
      const mistake = new MistakeQuestionData();
      mistake.questionId = question.id;
      mistake.flow = question.flows[0]?.values;

      user.mistakeQuestionDataset.push(mistake);
    } else {
      const correct = new CorrectQuestionData();
      correct.questionId = question.id;
      correct.flow = question.flows[0]?.values;

      user.correctQuestionDataset.push(correct);
    }
  } else {
    if (type === 'mistake') {
      user.mistakeQuestionDataset.forEach((data, i) => {
        if (data.questionId === question.id) user.mistakeQuestionDataset.splice(i, 1);
      });
    } else {
      user.correctQuestionDataset.forEach((data, i) => {
        if (data.questionId === question.id) user.correctQuestionDataset.splice(i, 1);
      });
    }
  }

  return userRepository.save(user);
}

export default updateQuestionData;
