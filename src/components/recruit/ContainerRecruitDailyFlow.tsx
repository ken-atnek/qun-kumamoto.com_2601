/* =======================================
 * 採用情報(RECRUIT)ページ｜1日の業務の流れ
 * URL: src/components/recruit/ContainerRecruitDailyFlow.tsx
 * Created: 2026-1-16
 * Last updated: 2026-1-17
 * ======================================= */

import styles from '@/styles/PageRecruit.module.scss';
import { dailyFlowData } from '@/data/recruit/dailyFlowData';
import Image from 'next/image';

export default function ContainerRecruitDailyFlow() {
  return (
    <>
      <section className={styles.containerRecruitDailyFlow}>
        <h3>1日の業務の流れ</h3>
        <p className={styles.topTitle}>ルート配達業務</p>
        <div className={styles.boxDailyFlowColumn}>
          {dailyFlowData.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.dailyFlowColumn}>
              <h4>{column.label}</h4>
              <ul className={styles.dailyFlowList}>
                {column.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={[
                      styles.dailyFlowItem,
                      item.variant
                        ? styles[`dailyFlowItem--${item.variant}`]
                        : '',
                    ].join(' ')}
                  >
                    {item.time && (
                      <span className={styles.itemTime}>{item.time}</span>
                    )}
                    {item.title && (
                      <p className={styles.itemTitle}>{item.title}</p>
                    )}
                    <div className={styles.itemDetails}>
                      {item.sub && (
                        <p>
                          {item.sub.map((line, lineIndex) => (
                            <span key={lineIndex}>{line}</span>
                          ))}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.announce}>
          ※あくまで参考例です。熊本県内、佐賀・長崎・宮崎・鹿児島など各方面でタイムスケジュールは異なります。
        </p>
      </section>
      <section className={styles.containerPickup}>
        <article>
          <div className={styles.boxDetails}>
            <div className={styles.itemImage}>
              <Image
                src="/images/recruit/pickup-01.webp"
                alt="九州で働く魅力"
                width={272}
                height={255}
              />
            </div>
            <h3>九州運輸で働く魅力</h3>
            <p>
              スタッフはみんな明るく、楽しい職場です。会社行事(夏祭り、安全運転研修、社員旅行等)も充実。
              仕事で知らない場所・土地へ行き、自身の見聞を広めることもできるステキな仕事です。
            </p>
          </div>
          <div className={styles.boxDetails}>
            <div className={styles.itemImage}>
              <Image
                src="/images/recruit/pickup-02.webp"
                alt="未経験者へのサポート"
                width={272}
                height={255}
              />
            </div>
            <h3>経験者への復職サポート</h3>
            {/* <p className={styles.announce}>
              未経験者大歓迎！
              <br />
              普通免許の方でもＯＫ！
              <br />
              働きながら免許取得可能
              <br />
              （中型・大型・リフト免許取得制度あり）
              <span className={styles.announce}>
                免許取得費用は<em>当社全額負担します</em>
              </span>
            </p> */}
            <p className={styles.announce}>
              ブランクのある方も大歓迎！
              <br /> 以前の経験を活かして働けます。
              <br />
              復職前の不安もしっかりサポート
              <br />
              同乗研修・業務確認あり
              <br />
              無理なく現場復帰できる環境です
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
