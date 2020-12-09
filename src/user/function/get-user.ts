import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../model/user-repository';

export async function getUser(userId?: string) {
  const userRepository = getCustomRepository(UserRepository);

  if (userId) {
    return userRepository.findOne({ username: userId }, { relations: ['profile'] });
  }

  return userRepository.find({ relations: ['profile'] });
}

export default getUser;
