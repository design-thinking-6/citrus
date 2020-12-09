import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question';

@Entity('hints')
export class Hint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Question, (question) => question.hints)
  question: Question;

  @Column()
  time: number;

  @Column()
  value: string;
}

export default Hint;
