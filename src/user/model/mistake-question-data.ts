import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user';

@Entity('mistake_question_dataset')
export class MistakeQuestionData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.mistakeQuestionDataset)
  user: User;

  @Column({ type: 'uuid', name: 'question_id' })
  questionId: string;

  @Column({ type: 'varchar', array: true })
  flow: string[];
}

export default MistakeQuestionData;
