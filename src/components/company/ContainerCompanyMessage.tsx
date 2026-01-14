/* =======================================
 * 業務内容(WORKS)ページ｜サービス
 * URL: src/components/company/ContainerCompanyMessage.tsx
 * Created: 2026-1-13
 * Last updated: 2026-1-13
 * ======================================= */

import BlockTitle from '@/components/BlockTitle';
import styles from '@/styles/PageCompany.module.scss';

export default function ContainerCompanyMessage() {
  return (
    <section className={styles.containerCompanyMessage}>
      <BlockTitle titleJp="社長挨拶" titleEn="Message from the President" />
      <article>
        <p>
          昨今、物流業界は大きな変革期を迎えております。
          <br />
          消費者ニーズの多様化に伴い流通・小売り形態が変化し、それに対応する労働インフラの脆弱化といった構造的な課題に直面しております。さらに、ビジネスにおける多様なニーズへの対応も求められており、社会における物流の役割と重要性は、かつてないほど高まっております。
          <br />
          <br />
          当社は、創業以来の「お客様第一主義」を信条に、安全、迅速、確実な配送サービスの提供を通じて社会に貢献することを使命としてまいりました。このような時代の流れの中でも柔軟に対応しながら、「人を中心とした物流」を貫き、温かみのあるサービスを提供することをこれまでも、そしてこれからも忘れません。
          <br />
          <br />
          「人材こそ企業の礎である」という企業理念のもと、ドライバーの育成、働きやすい職場環境づくりにも力を注いでおります。１人ひとりの成長が、お客様の満足につながっていくと確信しております。
          <br />
          今後とも、皆様からの信頼に応えることができる企業であり続けるため、現状に満足することなく新しい時代の物流事業に挑戦を続けてまいります。
        </p>
        <div className={styles.itemCeo}>
          <span>代表取締役社長</span>渡邉 直美
        </div>
      </article>
    </section>
  );
}
