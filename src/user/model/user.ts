import {
  Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // 실제 id
  username: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
  })
  @JoinColumn()
  profile: Profile;

  @Column({ default: false, name: 'is_admin' })
  isAdmin: boolean;
}

export default User;
