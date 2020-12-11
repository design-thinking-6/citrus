import { getCustomRepository } from 'typeorm';
import { NoticeRepository } from '../model/notice-repository';

export async function getNotice(noticeId?: string) {
  const noticeRepository = getCustomRepository(NoticeRepository);

  if (noticeId) return noticeRepository.findOne({ id: noticeId });

  return noticeRepository.find({});
}

export default getNotice;
