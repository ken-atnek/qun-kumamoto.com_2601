/* =======================================
 * 採用情報(RECRUIT)ページ｜福利厚生
 * URL: src/components/recruit/ContainerRecruitDailyFlow.tsx
 * Created: 2026-1-16
 * Last updated: 2026-1-17
 * ======================================= */

import styles from '@/styles/PageRecruit.module.scss';
import { benefitsItems } from '@/data/recruit/benefitsData';

export default function ContainerRecruitBenefits() {
  return (
    <section
      className={styles.containerRecruitBenefits}
      aria-labelledby="benefitsTitle"
    >
      <p className={styles.sidebarH3}>Employee benefits</p>
      <h3 className={styles.itemH3} id="benefitsTitle">
        福利厚生
      </h3>
      <ul>
        {benefitsItems.map((item) => (
          <li key={item.no} className={styles.card}>
            <p className={styles.no} aria-hidden="true">
              {item.no}
            </p>
            <div className={styles.icon} aria-hidden="true">
              <svg className={styles[item.iconId]}>
                <use href={`#${item.iconId}`} />
              </svg>
            </div>
            <h4>{item.title}</h4>
            <p className={styles.description}>
              {item.description.map((line, lineIndex) => (
                <span key={lineIndex}>{line}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
