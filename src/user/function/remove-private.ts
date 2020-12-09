import { User } from '../model/user';

export async function removePrivate(user: User) {
  const result = JSON.parse(JSON.stringify(user));

  delete result.password;

  return result;
}

export default removePrivate;
