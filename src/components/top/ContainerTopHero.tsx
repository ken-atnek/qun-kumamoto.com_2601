/* =======================================
 *トップページ｜HERO
 * URL:src/components/top/ContainerTopHero.tsx
 * Created: 2026-1-4
 * Last updated: 2026-1-10
 * ======================================= */

'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';

const heroImages = [
  // '/images/top/hero01.webp',
  // '/images/top/hero02.webp',
  '/images/top/hero03.webp',
];

export default function ContainerTopHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 画像切り替え間隔（ms）

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.containerTopHero}>
      <div className={styles.bgImage}>
        {heroImages.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <Image
              key={src}
              src={src}
              alt="HERO画像"
              width={1920}
              height={600}
              priority={index === 0}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left bottom',
                opacity: isActive ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out',
              }}
            />
          );
        })}
      </div>
      <div className={styles.mobileImage}>
        <Image
          src="/images/logo-wh.webp"
          alt="株式会社 九州運輸のロゴ"
          width={368}
          height={48}
        />
      </div>
      <p className={styles.catch}>
        熊本の
        <br />
        心と旬を運ぶ
      </p>
      <p className={styles.text}>
        物流を通し人と人との懸け橋に。熊本と全国を結ぶ。
        <br />
        それが私たち 九州運輸。
      </p>
    </section>
  );
}
