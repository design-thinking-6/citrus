import { EntityRepository, Repository } from 'typeorm';
import { User } from './user';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByUsername(username: string) {
    return this.findOne({ username }, { relations: ['profile'] });
  }
}

export default UserRepository;
