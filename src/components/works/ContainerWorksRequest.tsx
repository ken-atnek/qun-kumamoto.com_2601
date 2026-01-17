/* =======================================
 * 業務内容(WORKS)ページ｜各種ご依頼
 * URL: src/components/works/ContainerWorksRequest.tsx
 * Created: 2026-1-12
 * Last updated: 2026-1-12
 * ======================================= */

import BlockTitle from '@/components/BlockTitle';
import styles from '@/styles/PageWorks.module.scss';
import Link from 'next/link';

import Image from 'next/image';

const requestItems = [
  {
    title: '貸切運送',
    descriptions: [
      '日時・時間・場所・車種と自由に設定でき、お客様のニーズに応じてトラックを貸し切り、輸送するサービスです。',
      '個別配送便 タイムリーかつ最適な車両で効率的なお荷物の配送を実現します。',
    ],
    image: '/images/works/request01.webp',
  },
  {
    title: '一時保管、在庫管理',
    descriptions: [
      '一時的にお客様の大事な荷物をお預かり致します。 入出庫・在庫管理・簡易品質確認も請け負います。',
    ],
    image: '/images/works/request02.webp',
  },
  {
    title: '積み替え運送',
    descriptions: [
      '各地から届いた荷物を利便性を活かして、各方面に分配配送致します。作業場所・装備の提供や、積替え作業等も柔軟に対応いたします。         ',
    ],
    image: '/images/works/request03.webp',
  },
  {
    title: '一般貨物自動車運送業',
    descriptions: [
      '熊本各地域、並びに九州各県より東北、関東、関西、中京、中国、四国方面に輸送致します。主に青果物、一般荷物、プラスチック製品の原料、家畜の飼料、農作物の肥料、自動販売機、その他各種貨物。',
    ],
    image: '/images/works/request04.webp',
  },
] as const;

export default function ContainerWorksRequest() {
  return (
    <section className={styles.containerWorksRequest}>
      <BlockTitle titleJp="各種ご依頼" titleEn="request" />
      <article>
        <ul className={styles.listRequest}>
          {requestItems.map((item, index) => (
            <li key={index}>
              <Image
                src={item.image}
                width={109}
                height={109}
                alt={item.title}
              />
              <div className={styles.contents}>
                <h4>{item.title}</h4>
                <p>
                  {item.descriptions.map((text, index) => (
                    <span key={index}>
                      {text}
                      {index < item.descriptions.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link href="/contact/" className={styles.linkContact}>
          <span>各種ご依頼はこちら</span>
          <i></i>
        </Link>
      </article>
    </section>
  );
}
