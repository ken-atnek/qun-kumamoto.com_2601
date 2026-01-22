/* =======================================
 * 採用情報(RECRUIT)ページ｜求人カードLIST
 * URL: src/components/recruit/RecruitJobCardList.tsx
 * Created: 2026-1-17
 * Last updated: 2026-1-17
 * ======================================= */
import clsx from 'clsx';
import styles from './RecruitJobCard.module.scss';
import type { RecruitJobIndexItem } from '@/data/recruit/jobsIndex';
import RecruitJobCardItem from './RecruitJobCardItem';

type Variant = 'top' | 'detail';

type Props = {
  items: RecruitJobIndexItem[];
  variant?: Variant;
};

export default function RecruitJobCardList({ items, variant = 'top' }: Props) {
  return (
    <ul
      className={clsx(
        styles.listJobCard,
        variant === 'top' && styles.listJobCardTop,
        variant === 'detail' && styles.listJobCardDetail
      )}
    >
      {items.map((job) => (
        <li key={job.id} className={styles.itemJobCard}>
          <RecruitJobCardItem job={job} />
        </li>
      ))}
    </ul>
  );
}
