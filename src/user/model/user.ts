import {
  Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile';
import MistakeQuestionData from './mistake-question-data';
import CorrectQuestionData from './correct-question-data';

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

  @OneToMany(() => MistakeQuestionData, (data) => data.user, {
    cascade: true,
  })
  @JoinColumn()
  mistakeQuestionDataset: MistakeQuestionData[];

  @OneToMany(() => CorrectQuestionData, (data) => data.user, {
    cascade: true,
  })
  @JoinColumn()
  correctQuestionDataset: CorrectQuestionData[];

  @Column({ default: false, name: 'is_admin' })
  isAdmin: boolean;
}

export default User;
