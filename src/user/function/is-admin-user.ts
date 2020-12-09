import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../model/user-repository';

export async function isAdminUser(id: string, password: string): Promise<boolean> {
  const userRepository = getCustomRepository(UserRepository);

  return (await userRepository.count({ username: id, password, isAdmin: true }) === 1);
}

export default isAdminUser;
