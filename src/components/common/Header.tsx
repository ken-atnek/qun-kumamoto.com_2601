/* =======================================
 *九州運輸 HEADER
 * URL:src/components/common/Header.tsx
 * Created: 2025-12-30
 * Last updated: 2025-12-30
 * ======================================= */
'use client';
import styles from './Header.module.scss';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen]);

  // ページ判定
  const pathname = usePathname();
  const isTop = pathname === '/';

  return (
    <header
      className={clsx(
        styles.containerHeader,
        isTop ? styles['isTop'] : styles['isSub']
      )}
      id="Header"
    >
      <button
        type="button"
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
      <article>
        <Link href="/" className={styles.itemLogo}>
          <h1>
            <svg aria-label="九州運輸">
              <use href="#svg_logoMark" />
            </svg>
            <span>熊本医療＆介護の転職サイト</span>
          </h1>
        </Link>
        <nav>
          <Link href="/jobs/">求人検索</Link>
          <Link href="/library/">お気に入り・閲覧検索</Link>
        </nav>
        <Link href="" className={styles.linkMyPage}>
          <span> マイページ</span>
        </Link>
      </article>
    </header>
  );
};

export default Header;
