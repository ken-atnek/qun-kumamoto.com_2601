'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import type { MouseEvent, ReactNode } from 'react';

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  /** 同一ページ時のスクロールをスムーズにする */
  smooth?: boolean;
  /** スクロール先（基本は0でOK） */
  top?: number;
};

const normalizePathForCompare = (path: string): string => {
  if (path === '/') return '/';
  return path.replace(/\/+$/, '');
};

const getHrefParts = (
  href: LinkProps['href']
): { path: string | null; hash: string | null } => {
  if (typeof href === 'string') {
    // "/about/?a=1#sec" → path="/about/" hash="#sec"
    const [beforeHash, hashPart] = href.split('#');
    const pathOnly = (beforeHash ?? '').split('?')[0] ?? '';
    const hash = hashPart ? `#${hashPart}` : null;
    return { path: pathOnly || null, hash };
  }

  // UrlObject
  const path = href.pathname ?? null;
  const hashRaw =
    typeof href.hash === 'string' && href.hash.length > 0 ? href.hash : '';
  const hash = hashRaw
    ? hashRaw.startsWith('#')
      ? hashRaw
      : `#${hashRaw}`
    : null;

  return { path, hash };
};

export default function ScrollLink({
  href,
  children,
  className,
  smooth = true,
  top = 0,
  ...rest
}: Props) {
  const pathname = usePathname();

  const currentPath = normalizePathForCompare(pathname);
  const { path: targetPath, hash: targetHash } = getHrefParts(href);
  const compareTargetPath = targetPath
    ? normalizePathForCompare(targetPath)
    : null;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // 同一ページなら「遷移」ではなく「スクロール」扱いにする
    if (compareTargetPath && currentPath === compareTargetPath) {
      e.preventDefault();

      if (targetHash) {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
          return;
        }
      }

      window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
      return;
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
