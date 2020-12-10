import {
  Column, Entity, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @Column({ nullable: true })
  grade?: number;

  @Column({ name: 'short_message', nullable: true })
  shortMessage?: string;

  @Column({ nullable: true })
  url?: string;
}

export default Profile;
