/* =======================================
 * 採用情報(RECRUIT)ページ｜1日の業務の流れ
 * URL: src/components/recruit/ContainerRecruitDailyFlow.tsx
 * ======================================= */

import styles from '@/styles/PageRecruit.module.scss';
import { dailyFlowData } from '@/data/recruit/dailyFlowData';

export default function ContainerRecruitDailyFlow() {
  return (
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
  );
}
