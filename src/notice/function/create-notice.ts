import { getCustomRepository } from 'typeorm';
import { CreatableNoticeInfo } from '../schema/creatable-notice-info';
import { checkValidUser } from '../../user/function/check-valid-user';
import { isAdminUser } from '../../user/function/is-admin-user';
import { Unauthorized } from '../../../app/error/unauthorized';
import { NoticeRepository } from '../model/notice-repository';
import { Notice } from '../model/notice';

export async function createNotice({ id, password }, noticeInfo: CreatableNoticeInfo) {
  await checkValidUser(id, password);

  if (!await isAdminUser(id, password)) throw new Unauthorized('This user is not admin');

  const noticeRepository = getCustomRepository(NoticeRepository);

  const notice = new Notice();
  notice.title = noticeInfo.title;
  notice.content = noticeInfo.content;

  return noticeRepository.save(notice);
}

export default createNotice;
