/* =======================================
 * 採用情報(RECRUIT)ページ｜熊本の旬を運ぶ
 * URL: src/components/recruit/ContainerRecruitHead.tsx
 * Created: 2026-1-16
 * Last updated: 2026-1-17
 * ======================================= */

import styles from '@/styles/PageRecruit.module.scss';

export default function ContainerRecruitHead() {
  return (
    <section className={styles.containerRecruitHead}>
      <div className={styles.head}>熊本の旬を運ぶ。</div>
      <p>
        そして、届け繋ぐ喜び。
        <br />
        そんな物流の仕事を一緒にしませんか？
      </p>
    </section>
  );
}
