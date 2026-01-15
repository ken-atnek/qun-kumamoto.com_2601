/* =======================================
 * ページタイトル
 * URL: src/components/PageTitle.tsx
 * Created: 2026-1-12
 * Last updated: 2026-1-12
 * ======================================= */

import styles from './PageTitle.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

type Props = {
  titleJp?: string;
  titleEn?: string;
  catchCopy?: string;
  description?: string;
  variant?: 'works' | 'company' | 'contact' | 'vehicles' | 'recruit';
};

export default function PageTitle({
  titleJp,
  titleEn,
  catchCopy,
  description,
  variant,
}: Props) {
  return (
    <section
      className={clsx(
        styles.containerPageTop,
        variant && styles[`variant-${variant}`]
      )}
    >
      <article>
        {(titleJp || titleEn) && (
          <div className={styles.itemBreadcrumb}>
            <Link href="/">TOP</Link>
            <p>
              {titleEn && <i>{titleEn}</i>}
              {titleJp && <span>{titleJp}</span>}
            </p>
          </div>
        )}
        {titleJp && <h2>{titleJp}</h2>}
        {titleEn && <div className={styles.sidebarH2}>{titleEn}</div>}
        {catchCopy && <p className={styles.catchCopy}>{catchCopy}</p>}
        {description && <p className={styles.description}>{description}</p>}
        {titleEn && <div className={styles.bgText}>{titleEn}</div>}
      </article>
    </section>
  );
}
