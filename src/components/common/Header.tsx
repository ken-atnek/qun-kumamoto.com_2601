/* =======================================
 *九州運輸 HEADER
 * URL:src/components/common/Header.tsx
 * Created: 2025-12-30
 * Last updated: 2026-1-4
 * ======================================= */
'use client';
import styles from './Header.module.scss';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  // ページ判定
  const pathname = usePathname();
  const isTop = pathname === '/';
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        navRef.current &&
        buttonRef.current &&
        !navRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <>
      <header
        className={clsx(
          styles.containerHeader,
          isTop ? styles['isTop'] : styles['isSub']
        )}
        id="Header"
      >
        <article
          className={clsx(
            styles.boxMobileMenu,
            isOpen && styles.isOpen,
            !isOpen && styles.closing
          )}
          ref={navRef}
        >
          <h1>
            <Link
              href="/"
              aria-label="株式会社九州運輸 トップページへ"
              onClick={closeMenu}
            >
              <Image
                src={
                  isMobile
                    ? '/images/logo-wh.webp'
                    : isTop
                      ? '/images/logo-wh.webp'
                      : '/images/logo-bk.webp'
                }
                alt="株式会社九州運輸"
                width={360}
                height={40}
                loading="lazy"
              />
            </Link>
          </h1>
          <nav className={styles.mainMenu}>
            <Link href="/" className={styles.isMobile} onClick={closeMenu}>
              TOP
            </Link>
            <Link href="/works/" onClick={closeMenu}>
              事業内容
            </Link>
            <Link href="/vehicles/" onClick={closeMenu}>
              保有車両
            </Link>
            <Link href="/company/" onClick={closeMenu}>
              会社概要
            </Link>
          </nav>
          <nav className={styles.subMenu}>
            <Link
              href="/recruit/"
              className={styles.linkRecruit}
              onClick={closeMenu}
            >
              採用情報
            </Link>
            <Link
              href="/contact/"
              className={styles.linkContact}
              onClick={closeMenu}
            >
              ご依頼・お問い合せ
            </Link>
          </nav>
        </article>
      </header>
      <button
        type="button"
        ref={buttonRef}
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Header;
