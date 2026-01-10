/* =======================================
 *トップページ｜採用情報
 * URL: src/components/top/ContainerTopRecruit.tsx
 * Created: 2026-1-10
 * Last updated: 2026-1-10
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';
import Link from 'next/link';

export default function ContainerTopRecruit() {
  return (
    <section className={styles.containerTopRecruit}>
      <article>
        <div className={styles.boxContents}>
          <h2 className={styles.itemH2}>採用情報</h2>
          <span className={styles.sidebarH2}>RECRUIT</span>
          <h3>そんな物流の仕事を一緒にしませんか？</h3>
          <p className={styles.announce}>
            ・未経験者大歓迎！
            <br />
            ・普通免許の方でもＯＫ！
            <br />
            ・働きながら免許取得可能
            <br />
            ※免許取得費用は当社全額負
          </p>
          <Link href="/">
            <span>採用情報を詳しく見る</span>
            <i></i>
          </Link>
        </div>
      </article>
    </section>
  );
}
