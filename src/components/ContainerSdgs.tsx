/* =======================================
 * SDGS
 * URL: src/components/ContainerSdgs.tsx
 * Created: 2026-1-10
 * Last updated: 2026-1-10
 * ======================================= */

import styles from './ContainerSdgs.module.scss';

import Image from 'next/image';

export default function ContainerSdgs() {
  return (
    <section className={styles.containerSdgs}>
      <div className={styles.itemLogo}>
        <Image
          src="/images/sdgs/sdgs_logo.webp"
          width={493}
          height={62}
          alt="九州運輸のSDGS"
        />
      </div>
      <h2>九州運輸のSDGs</h2>
      <ul>
        <li>
          <Image
            src="/images/sdgs/sdg_icon_01.webp"
            width={230}
            height={230}
            alt="全ての人に健康と福祉を"
          />
        </li>
        <li>
          <Image
            src="/images/sdgs/sdg_icon_02.webp"
            width={230}
            height={230}
            alt="エネルギーをみんなにそしてクリーンに"
          />
        </li>
        <li>
          <Image
            src="/images/sdgs/sdg_icon_03.webp"
            width={230}
            height={230}
            alt="住み続けられるまちづくりを"
          />
        </li>
        <li>
          <Image
            src="/images/sdgs/sdg_icon_04.webp"
            width={230}
            height={230}
            alt="海の豊かさを守ろう"
          />
        </li>
        <li>
          <Image
            src="/images/sdgs/sdg_icon_05.webp"
            width={230}
            height={230}
            alt="陸の豊かさも守ろう"
          />
        </li>
      </ul>
    </section>
  );
}
