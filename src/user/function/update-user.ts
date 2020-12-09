import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../model/user-repository';
import { Forbidden } from '../../../app/error/forbidden';
import { ModifiableUserInfo } from '../schema/modifiable-user-info';
import { Unauthorized } from '../../../app/error/unauthorized';

export async function updateUser({ id, password }, userInfo: ModifiableUserInfo) {
  const userRepository = getCustomRepository(UserRepository);

  if (await userRepository.count({ username: id }) === 0) {
    throw new Forbidden(`User id "${userInfo.id}" is not exist`);
  }

  if (await userRepository.count({ username: id, password }) === 0) {
    throw new Unauthorized('User id and password not matched');
  }

  const user = await userRepository.findByUsername(id);

  if (userInfo.nickname) user.nickname = userInfo.nickname;
  if (userInfo.password) user.password = userInfo.password;

  if (userInfo.grade) user.profile.grade = userInfo.grade;
  if (userInfo.short_message) user.profile.shortMessage = userInfo.short_message;

  await userRepository.save(user);

  return userRepository.findOne({ username: id }, { relations: ['profile'] });
}

export default updateUser;
