import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question';

@Entity('flows')
export class Flow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Question, (question) => question.flows)
  question: Question;

  @Column({ type: 'varchar', array: true })
  values: string[];
}

export default Flow;
