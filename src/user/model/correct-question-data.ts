import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user';

@Entity('correct_question_dataset')
export class CorrectQuestionData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.correctQuestionDataset)
  user: User;

  @Column({ type: 'uuid', name: 'question_id' })
  questionId: string;

  @Column({ type: 'varchar', array: true })
  flow: string[];
}

export default CorrectQuestionData;
