import { User } from '../model/user';

export async function removePrivate(user: User) {
  const result = JSON.parse(JSON.stringify(user));

  delete result.password;
  delete result.isAdmin;

  return result;
}

export default removePrivate;
