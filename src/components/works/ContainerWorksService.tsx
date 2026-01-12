/* =======================================
 * 業務内容(WORKS)ページ｜サービス
 * URL: src/components/works/ContainerWorksService.tsx
 * Created: 2026-1-12
 * Last updated: 2026-1-12
 * ======================================= */

import BlockTitle from '@/components/BlockTitle';
import styles from '@/styles/PageWorks.module.scss';
// import Link from 'next/link';

import Image from 'next/image';

const serviceItems = [
  {
    id: '01',
    title: '個別配送便',
    descriptions: [
      '個別配送便 様々なお客様から集荷した商品を、ルート別に仕分けして特定のお届け先に配送します。',
    ],
    image: '/images/works/service01.webp',
  },
  {
    id: '02',
    title: 'チャーター便',
    descriptions: [
      '早朝から深夜まで、全国へ輸送対応いたします。',
      '終日トラックを貸切りたい場合は、チャーター便がおススメです。',
    ],
    image: '/images/works/service02.webp',
  },
  {
    id: '03',
    title: 'スポット便',
    descriptions: [
      '短期間だけの輸送にもご対応します。また、緊急の依頼にも迅速に対応できます。トラックが見つからないというときはぜひ相談ください。',
    ],
    image: '/images/works/service03.webp',
  },
  {
    id: '04',
    title: '倉庫保管サービス',
    descriptions: [
      '入手作業から倉庫保管を行います。様々な荷物の保管実績があり、多様な荷姿の商品の対応が可能です。',
    ],
    image: '/images/works/service04.webp',
  },
] as const;

export default function ContainerWorksService() {
  return (
    <section className={styles.containerWorksService}>
      <BlockTitle titleJp="サービス" titleEn="service" />
      <article>
        <h4>九州運輸の高品質輸送</h4>
        <span className={styles.sidebarH4}>High Quality Transportation</span>
        <ul className={styles.listText}>
          <li>クラウド型運行管理装置（デジタコ）の導入</li>
          <li>全車両ドライブレコーダーの設置</li>
          <li>物流・ロジスティックサービス</li>
          <li>職場の労働環境向上への取り組み</li>
          <li>車両点検整備</li>
          <li>モーダルシフトへの取り組み</li>
        </ul>
        <ul className={styles.listService}>
          {serviceItems.map((item) => (
            <li key={item.id}>
              <div className={styles.itemNumber}>{item.id}</div>
              <Image
                src={item.image}
                width={109}
                height={109}
                alt={item.title}
              />
              <h5>{item.title}</h5>
              <p>
                {item.descriptions.map((text, index) => (
                  <span key={index}>
                    {text}
                    {index < item.descriptions.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
