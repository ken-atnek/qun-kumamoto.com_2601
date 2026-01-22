/* =======================================
 * 採用情報(RECRUIT)ページ｜採用情報
 * URL: src/components/recruit/RecruitDetailsJobList.tsx
 * Created: 2026-1-22
 * Last updated: 2026-1-22
 * ======================================= */

import styles from '@/styles/PageRecruitDetails.module.scss';
import { recruitJobsIndex } from '@/data/recruit/jobsIndex';
import RecruitJobCardList from './RecruitJobCardList';
import Link from 'next/link';

export default function RecruitDetailsJobList() {
  const openJobs = recruitJobsIndex
    .filter((job) => job.isOpen)
    .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));

  return (
    <section className={styles.recruitDetailsJobList}>
      {openJobs.length === 0 ? (
        <p className={styles.notice}>現在募集は行なっておりません。</p>
      ) : (
        <article className={styles.blockJobList}>
          <Link
            href="/recruit/#containerRecruitInformation"
            className={styles.linkCardList}
          >
            <span>求人一覧はこちら</span>
            <i></i>
          </Link>
          <RecruitJobCardList items={openJobs} variant="detail" />
        </article>
      )}
    </section>
  );
}
