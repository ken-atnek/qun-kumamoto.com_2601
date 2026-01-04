/* =======================================
 *トップページ｜HERO
 * URL:src/components/top/ContainerTopHero.tsx
 * Created: 2026-1-4
 * Last updated: 2026-1-4
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';

export default function ContainerTopHero() {
  return (
    <section className={styles.containerTopHero}>
      <div className={styles.bgImage}>
        <Image
          src="/images/top/hero.webp"
          alt="HERO画像"
          width={1920}
          height={600}
        />
      </div>
      <p className={styles.catch}>
        熊本の
        <br />
        心と旬を運ぶ。
      </p>
      <p className={styles.text}>
        物流を通し人と人との懸け橋に。熊本と全国を結ぶ。
        <br />
        それが私たち 九州運輸。
      </p>
    </section>
  );
}
