import { getCustomRepository } from 'typeorm';
import { CreatableUserInfo } from '../schema/creatable-user-info';
import { UserRepository } from '../model/user-repository';
import { User } from '../model/user';
import { Profile } from '../model/profile';
import { Forbidden } from '../../../app/error/forbidden';

export async function createUser(userInfo: CreatableUserInfo) {
  const userRepository = getCustomRepository(UserRepository);

  if (await userRepository.count({ username: userInfo.id }) > 0) {
    throw new Forbidden(`User id "${userInfo.id}" is already exist`);
  }

  const user = new User();
  const profile = new Profile();
  user.username = userInfo.id;
  user.nickname = userInfo.nickname;
  user.password = userInfo.password;
  user.profile = profile;

  profile.user = user;

  await userRepository.save(user);

  return userRepository.findOne({ username: userInfo.id }, { relations: ['profile'] });
}

export default createUser;
