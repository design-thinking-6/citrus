import { EntityRepository, Repository } from 'typeorm';
import { Notice } from './notice';

@EntityRepository(Notice)
export class NoticeRepository extends Repository<Notice> {
}

export default NoticeRepository;
