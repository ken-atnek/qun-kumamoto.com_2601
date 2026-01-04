/* =======================================
 *トップページ｜業務内容
 * URLsrc/components/top/ContainerTopWorks.tsx
 * Created: 2026-1-4
 * Last updated: 2026-1-4
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';
import Link from 'next/link';

// import Image from 'next/image';

const worksItems = [
  {
    id: 'service',
    en: 'Service',
    title: 'サービス',
    descriptions: ['九州運輸の高品質輸送', '倉庫管理サービスなど。'],
    href: '/service',
  },
  {
    id: 'request',
    en: 'Request',
    title: '各種ご依頼',
    descriptions: [
      '・貸切運送',
      '・一般保管、在庫管理',
      '・積み替え運送',
      '・一般貨物自動車運送業',
    ],
    href: '/request',
  },
  {
    id: 'variation',
    en: 'Variation',
    title: '保有車両',
    descriptions: ['県内〜全国へどこまでも、', '熊本の旬を運ぶ。'],
    href: '/vehicles',
  },
] as const;

export default function ContainerTopWorks() {
  return (
    <section className={styles.containerTopWorks}>
      <h2 className={styles.itemH2}>業務内容</h2>
      <span className={styles.sidebarH2}>WORKS</span>
      <p className={styles.announce}>
        地域密着と地域貢献をコンセプトに高品質輸送を展開
      </p>
      <ul className={styles.listWorks}>
        {worksItems.map((item) => (
          <li key={item.id} data-work={item.id}>
            <Link href={item.href} className={styles.itemLink}>
              <span className={styles.titleEn}>{item.en}</span>
              <h3>
                {item.title}
                <small>について</small>
              </h3>
              <p>
                {item.descriptions.map((text, index) => (
                  <span key={index}>
                    {text}
                    {index < item.descriptions.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </Link>
            <Link href={item.href} className={styles.itemBtn}></Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
