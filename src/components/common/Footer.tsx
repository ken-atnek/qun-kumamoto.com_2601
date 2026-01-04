/* =======================================
 *九州運輸 FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-12-30
 * Last updated: 2025-12-30
 * ======================================= */
import Image from 'next/image';
import styles from './Footer.module.scss';

// import Link from 'next/link';
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
      </section>
    </footer>
  );
};

export default Footer;
