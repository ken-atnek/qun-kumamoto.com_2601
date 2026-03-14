/* =======================================
 *トップページ｜会社概要
 * URL: src/components/top/ContainerTopCompany.tsx
 * Created: 2026-1-10
 * Last updated: 2026-1-10
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';
import ScrollLink from '@/components/common/ScrollLink';

// import Image from 'next/image';

export default function ContainerTopCompany() {
  return (
    <section className={styles.containerTopCompany}>
      <article>
        <div className={styles.boxContents}>
          <h2 className={styles.itemH2}>会社概要</h2>
          <span className={styles.sidebarH2}>COMPANY</span>
          <p className={styles.announce}>
            創業45年の
            <br />
            信頼・安心・真心・誠実で
            <br />
            新時代の物流業を目指します。
          </p>
          <ScrollLink href="/company/">
            <span>詳しく見る</span>
            <i></i>
          </ScrollLink>
        </div>
      </article>
    </section>
  );
}
