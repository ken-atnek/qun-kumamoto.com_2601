/* =======================================
 * 採用情報(RECRUIT)ページ｜採用情報
 * URL: src/components/recruit/ContainerRecruitInformation.tsx
 * Created: 2026-1-17
 * Last updated: 2026-1-17
 * ======================================= */

import styles from '@/styles/PageRecruit.module.scss';
import { recruitJobsIndex } from '@/data/recruit/jobsIndex';
import RecruitJobCardList from './RecruitJobCardList';

export default function ContainerRecruitInformation() {
  const openJobs = recruitJobsIndex
    .filter((job) => job.isOpen)
    .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));

  return (
    <section
      className={styles.containerRecruitInformation}
      aria-labelledby="recruitInformation"
    >
      <h3 id="recruitInformation">採用情報</h3>
      <span className={styles.titleEn}>RECRUIT</span>

      {openJobs.length === 0 ? (
        <p className={styles.notice}>現在募集は行なっておりません。</p>
      ) : (
        <article className={styles.blockJobList}>
          <RecruitJobCardList items={openJobs} variant="top" />
        </article>
      )}
    </section>
  );
}
