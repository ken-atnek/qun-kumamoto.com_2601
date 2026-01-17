/* =======================================
 * 採用情報(RECRUIT)ページ｜採用情報
 * URL: src/components/recruit/ContainerRecruitInformation.tsx
 * Created: 2026-1-17
 * Last updated: 2026-1-17
 * ======================================= */

import styles from '@/styles/PageRecruit.module.scss';

export default function ContainerRecruitInformation() {
  return (
    <section
      className={styles.containerRecruitInformation}
      aria-labelledby="recruitInformation"
    >
      <h3 id="recruitInformation">採用情報</h3>
      <span className={styles.titleEn}>RECRUIT</span>
      <p>現在募集は行なっておりません。</p>
    </section>
  );
}
