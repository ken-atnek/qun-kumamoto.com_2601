/* =======================================
 * 採用情報(RECRUIT)ページ｜求人カードLIST
 * URL:src/components/recruit/RecruitJobCardItem.tsx
 * Created: 2026-1-17
 * Last updated: 2026-1-17
 * ======================================= */

import type { RecruitJobIndexItem } from '@/data/recruit/jobsIndex';
import styles from './RecruitJobCard.module.scss';
import Image from 'next/image';
import ScrollLink from '@/components/common/ScrollLink';

type Props = {
  job: RecruitJobIndexItem;
};

export default function RecruitJobCardItem({ job }: Props) {
  return (
    <>
      <div className={styles.boxDetails}>
        <h4>{job.title}</h4>
        <Image src={job.thumbSrc} alt={job.title} width={356} height={154} />

        {job.highlights && <p>{job.highlights}</p>}
        {job.lead && <p>{job.lead}</p>}

        <ul>
          <li className={styles.itemEmploymentType}>{job.employmentType}</li>
          <li className={styles.itemAreaText}>{job.areaText}</li>
          <li className={styles.itemSalaryText}>{job.salaryText}</li>
        </ul>

        {/* 補足 */}
      </div>
      <ScrollLink href={`/recruit/${job.id}`} className={styles.itemLink}>
        求人詳細はこちら
      </ScrollLink>
    </>
  );
}
