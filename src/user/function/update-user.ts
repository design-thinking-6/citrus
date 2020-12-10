import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../model/user-repository';
import { ModifiableUserInfo } from '../schema/modifiable-user-info';
import { checkValidUser } from './check-valid-user';

export async function updateUser({ id, password }, userInfo: ModifiableUserInfo) {
  const userRepository = getCustomRepository(UserRepository);

  await checkValidUser(id, password);

  const user = await userRepository.findByUsername(id);

  if (userInfo.nickname) user.nickname = userInfo.nickname;
  if (userInfo.password) user.password = userInfo.password;

  if (userInfo.grade) user.profile.grade = userInfo.grade;
  if (userInfo.short_message) user.profile.shortMessage = userInfo.short_message;
  if (userInfo.url) user.profile.url = userInfo.url;

  await userRepository.save(user);

  return userRepository.findOne({ username: id }, { relations: ['profile'] });
}

export default updateUser;
