import {
  Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { QuestionType } from './question-type';
import { Hint } from './hint';
import { Flow } from './flow';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @OneToMany(() => Hint, (hint) => hint.question, {
    cascade: true,
  })
  hints: Hint[];

  @OneToMany(() => Flow, (flow) => flow.question, {
    cascade: true,
  })
  flows: Flow[];

  @Column()
  difficult: number;

  @Column()
  score: number;

  @Column({
    type: 'enum',
    enum: QuestionType,
  })
  type: QuestionType;

  @Column()
  answer: string;
}

export default Question;
