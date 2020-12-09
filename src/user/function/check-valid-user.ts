import { getCustomRepository } from 'typeorm';
import { Forbidden } from '../../../app/error/forbidden';
import { Unauthorized } from '../../../app/error/unauthorized';
import { UserRepository } from '../model/user-repository';

export async function checkValidUser(id: string, password: string) {
  const userRepository = getCustomRepository(UserRepository);

  if (await userRepository.count({ username: id }) === 0) {
    throw new Forbidden(`User id "${id}" is not exist`);
  }

  if (await userRepository.count({ username: id, password }) === 0) {
    throw new Unauthorized('User id and password not matched');
  }

  return true;
}

export default checkValidUser;
