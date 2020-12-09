import { getCustomRepository } from 'typeorm';
import { SWaligner } from 'seqalign';

import { QuestionRepository } from '../model/question-repository';
import { checkValidUser } from '../../user/function/check-valid-user';
import { UserRepository } from '../../user/model/user-repository';

const defaultAligner = SWaligner();

export async function getRecommandQuestion({ id, password }, count = 5) {
  await checkValidUser(id, password);

  const userRepository = getCustomRepository(UserRepository);
  const questionRepository = getCustomRepository(QuestionRepository);

  const user = await userRepository.findOne({ username: id, password }, { relations: ['profile', 'mistakeQuestionDataset', 'correctQuestionDataset'] });

  const correctFlows = user.correctQuestionDataset.map((correctData) => correctData.flow.join(' '));
  const mistakeFlows = user.mistakeQuestionDataset.map((mistakeData) => mistakeData.flow.join(' '));

  const questions = await questionRepository.find({ select: ['id'], relations: ['flows'] });

  let scores = questions.map((question) => {
    const flow = question.flows.map(({ values }) => values.join(' '));
    const mainScore = defaultAligner.align(flow, mistakeFlows).score / (flow.length + mistakeFlows.length);
    const reverseScore = 1 - (defaultAligner.align(flow, correctFlows).score / (flow.length + correctFlows.length));

    return {
      id: question.id,
      score: mainScore + reverseScore,
    };
  });

  scores = scores.sort(({ score: a }, { score: b }) => ((a > b) ? -1 : 1));

  const ids = scores.splice(0, count).map(({ id: questionId }) => questionId);

  return questionRepository.findByIds(ids, { relations: ['hints', 'flows'] });
}

export default getRecommandQuestion;
