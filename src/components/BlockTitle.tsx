/* =======================================
 * ブロックタイトル
 * URL: src/components/BlockTitle.tsx
 * Created: 2026-1-12
 * Last updated: 2026-1-12
 * ======================================= */

import styles from './BlockTitle.module.scss';

type Props = {
  titleJp?: string;
  titleEn?: string;
};

export default function BlockTitle({ titleJp, titleEn }: Props) {
  return (
    <div className={styles.BlockTitle}>
      <article>
        {titleJp && <h3>{titleJp}</h3>}
        {titleEn && <div className={styles.sidebarH4}>{titleEn}</div>}
      </article>
    </div>
  );
}
