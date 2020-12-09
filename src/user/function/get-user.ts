import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../model/user-repository';

export async function getUser(userId?: string, password?: string) {
  const userRepository = getCustomRepository(UserRepository);

  if (userId) {
    if (password) return userRepository.findOne({ username: userId, password }, { relations: ['profile', 'mistakeQuestionDataset', 'correctQuestionDataset'] });
    return userRepository.findOne({ username: userId }, { relations: ['profile'] });
  }

  return userRepository.find({ relations: ['profile'] });
}

export default getUser;
