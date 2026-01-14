/* =======================================
 * 業務内容(WORKS)ページ｜経営の信条
 * URL: src/components/company/ContainerCompanyCreed.tsx
 * Created: 2026-1-13
 * Last updated: 2026-1-13
 * ======================================= */

import ExternalLink from '@/components/common/ExternalLink';
import styles from '@/styles/PageCompany.module.scss';

export default function ContainerCompanyCreed() {
  return (
    <section className={styles.containerCompanyCreed}>
      <article className={styles.blockHead}>
        <span className={styles.sidebarH3}>Creed</span>
        <h3>経営の信条</h3>
        <ul>
          <li>一、事業を通じて社会に奉仕する</li>
          <li>一、人の和をもって事業を興す</li>
          <li>一、丁寧、迅速をモットーにする</li>
          <li>一、従業員の生活安定向上を図る</li>
          <li>一、適正利潤を確保する</li>
          <li>一、安全輸送、無事故、無違反の確立</li>
        </ul>
      </article>
      <article className={styles.blockFoot}>
        <div className={styles.boxMap}>
          <iframe
            title="株式会社九州運輸 本社所在地（Googleマップ）"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13393.632593818716!2d130.745871!3d32.940232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540fb97515ea385%3A0x1b47126a47e8c439!2z44CSODYxLTEyMTQg54aK5pys55yM6I-K5rGg5biC5rOX5rC055S655Sw5bO277yS77yX77yS77yU4oiS77yR!5e0!3m2!1sja!2sjp!4v1638198053043!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={styles.boxBottom}>
          <div className={styles.wrapTitle}>
            <span className={styles.sidebarH3}>Access</span>
            <h3>アクセス</h3>
          </div>
          <div className={styles.wrapAddress}>
            <span className={styles.name}>
              <i>会社名</i>株式会社九州運輸
            </span>
            <span className={styles.address}>
              <i>住所</i>
              <address>熊本県菊池市泗水町田島2724-1</address>
            </span>
            <ExternalLink href="tel:0968383515">
              <span>TEL</span>0968-38-3515
            </ExternalLink>
            <ExternalLink href="tel:0968383715">
              <span>FAX</span>0968-38-3715
            </ExternalLink>
          </div>
        </div>
      </article>
    </section>
  );
}
