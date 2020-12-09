import { getCustomRepository } from 'typeorm';
import { QuestionRepository } from '../model/question-repository';

export async function getQuestion(questionId?: string) {
  const questionRepository = getCustomRepository(QuestionRepository);

  if (questionId) return questionRepository.findOne({ code: questionId }, { relations: ['hints', 'flows'] });

  return questionRepository.find({ relations: ['hints', 'flows'] });
}

export default getQuestion;
