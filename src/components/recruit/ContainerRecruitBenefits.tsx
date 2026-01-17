/* =======================================
 * 採用情報(RECRUIT)ページ｜1日の業務の流れ
 * URL: src/components/recruit/ContainerRecruitDailyFlow.tsx
 * Created: 2026-1-16
 * Last updated: 2026-1-17
 * ======================================= */

import styles from '@/styles/PageRecruit.module.scss';
import { benefitsItems } from '@/data/recruit/benefitsData';

export default function ContainerRecruitBenefits() {
  return (
    <section className={styles.benefits} aria-labelledby="benefitsTitle">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.en}>Employee benefits</p>
          <h2 className={styles.title} id="benefitsTitle">
            福利厚生
          </h2>
        </header>

        <div className={styles.grid}>
          {benefitsItems.map((item) => (
            <article key={item.no} className={styles.card}>
              <p className={styles.no} aria-hidden="true">
                {item.no}
              </p>

              <div className={styles.icon} aria-hidden="true">
                <svg className={styles.svg}>
                  <use href={`#${item.iconId}`} />
                </svg>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
