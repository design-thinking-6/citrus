import { getCustomRepository } from 'typeorm';
import { checkValidUser } from '../../user/function/check-valid-user';
import { isAdminUser } from '../../user/function/is-admin-user';
import { Unauthorized } from '../../../app/error/unauthorized';
import { NoticeRepository } from '../model/notice-repository';
import { NotFound } from '../../../app/error/not-found';

export async function deleteNotice({ id, password }, noticeId: string) {
  await checkValidUser(id, password);

  if (!await isAdminUser(id, password)) throw new Unauthorized('This user is not admin');

  const noticeRepository = getCustomRepository(NoticeRepository);

  if (await noticeRepository.count({ id: noticeId }) === 0) throw new NotFound(`Notice id "${noticeId}" is not found`);

  await noticeRepository.delete({ id: noticeId });
}

export default deleteNotice;
