import { EntityRepository, Repository } from 'typeorm';
import { Question } from './question';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
}

export default QuestionRepository;
