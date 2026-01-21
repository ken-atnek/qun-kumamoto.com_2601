/* =======================================
 * 採用情報(RECRUIT)ページ｜求人カードLIST
 * URL:src/components/recruit/RecruitJobCardItem.tsx
 * Created: 2026-1-17
 * Last updated: 2026-1-17
 * ======================================= */

import type { RecruitJobIndexItem } from '@/data/recruit/jobsIndex';
import styles from './RecruitJobCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

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
          <li>{job.employmentType}</li>
          <li>{job.areaText}</li>
          <li>{job.salaryText}</li>
        </ul>

        {/* 補足 */}
      </div>
      <Link href={job.href} className={styles.itemLink}>
        求人詳細はこちら
      </Link>
    </>
  );
}
