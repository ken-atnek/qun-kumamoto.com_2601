/* =======================================
 *九州運輸 FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-12-30
 * Last updated: 2026-1-4
 * ======================================= */
import Image from 'next/image';
import styles from './Footer.module.scss';
import ScrollLink from '@/components/common/ScrollLink';
import ExternalLink from '@/components/common/ExternalLink';
import Link from 'next/link';
// import ExternalLink from '@/components/common/ExternalLink';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <section className={styles.containerContact}>
        <h2>ご相談・お問い合わせ</h2>
        <div className={styles.boxLogo}>
          <Image
            src="/images/logo-bk.webp"
            alt="株式会社九州運輸"
            width={445}
            height={116}
            loading="lazy"
          />
        </div>
        <p> お急ぎの方は、お電話にてお問い合わせください。</p>
        <ExternalLink className={styles.itemTel} href="tel:0968-38-3515">
          <span>tel.</span>0968-38-3515
        </ExternalLink>
        <p>
          弊社へのご依頼・各種お問い合わせ・求人へのご応募はフォームよりお問い合わせください。
        </p>
        <nav>
          <ExternalLink
            className={styles.itemAccess}
            href="https://maps.app.goo.gl/RT2vEvL7KW41Yq5e8"
          >
            <h3>Access</h3>
            <span>熊本県菊池市泗水町田島2724-1</span>
          </ExternalLink>
          <Link href="/contact/" className={styles.itemContact}>
            <h3>Contact us</h3>
            <span>お問い合わせフォーム</span>
          </Link>
        </nav>
      </section>
      {/* メニュー */}
      <section className={styles.containerMenu}>
        <article>
          <div className={styles.boxLogo}>
            <Image
              src="/images/logo-wh.webp"
              alt="株式会社九州運輸"
              width={252}
              height={28}
              loading="lazy"
            />
          </div>
          <nav>
            <ScrollLink href="/vehicles/">保有車両</ScrollLink>
            <ScrollLink href="/works/">事業内容</ScrollLink>
            <ScrollLink href="/company/">会社概要</ScrollLink>
            <ScrollLink href="/recruit/">採用情報</ScrollLink>
            <ScrollLink href="/contact/">各種ご依頼</ScrollLink>
          </nav>
          <div className={styles.boxAddress}>
            <span>〒861-1214</span>
            <span>
              熊本県菊池市泗水町田島2724-1
              <ExternalLink href="https://maps.app.goo.gl/RT2vEvL7KW41Yq5e8">
                MAP
              </ExternalLink>
            </span>
            <div className={styles.wrapTel}>
              <ExternalLink href="tel:0968-38-3515">
                <span>tel.</span>0968-38-3515
              </ExternalLink>
              <ExternalLink href="tel:0968-38-3715">
                <span>fax.</span>0968-38-3715
              </ExternalLink>
            </div>
          </div>
          <div className={styles.boxContact}>
            <Link href="/contact/">ご依頼・お問い合わせ</Link>
            <p>Copyright 九州運輸. All Rights Reserved.</p>
          </div>
        </article>
      </section>
      {/* 亀の甲温泉・岡稲荷大明神 */}
      <section className={styles.containerGroupShop}>
        <ul>
          <li>
            <ExternalLink href="https://kamenokouonsen-kumamoto.com/">
              <div className={styles.itemImage}>
                <Image
                  src="/images/shop-kamenokou.webp"
                  alt="亀の甲温泉の画像"
                  width={158}
                  height={114}
                />
              </div>
              <div className={styles.itemLogo}>
                <Image
                  src="/images/logo-kamenokou.webp"
                  alt="亀の甲温泉の画像"
                  width={264}
                  height={67}
                />
              </div>
            </ExternalLink>
            <p>七水木温泉　岡稲荷大明神を望む　美人の湯。</p>
          </li>
          <li>
            <ExternalLink href="https://kamenokouonsen-kumamoto.com/oka-inari-shrine/">
              <div className={styles.itemImage}>
                <Image
                  src="/images/shop-okainari.webp"
                  alt="亀の甲温泉の画像"
                  width={158}
                  height={114}
                />
              </div>
              <div className={styles.itemLogo}>
                <Image
                  src="/images/logo-okainari.webp"
                  alt="亀の甲温泉の画像"
                  width={264}
                  height={67}
                />
              </div>
            </ExternalLink>
            <p>地域を守り続けて500年 岡稲荷大明神</p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
