/* =======================================
 * 九州運輸 TOPページ
 * URL: src/app/page.tsx
 * Created: 2025-08-26
 * Last updated: 2025-08-26
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';

export const generateMetadata = (): Metadata => {
  return {
    title: '株式会社九州運輸',
    description: isRealProduction
      ? '株式会社九州運輸は、地域に根ざした物流サービスを通じて、安全・確実・迅速な輸送を提供しています。お客様の大切な荷物を責任を持ってお届けし、地域社会とともに成長し続ける運輸会社です。'
      : undefined,
  };
};
export default function Home() {
  return <>123</>;
}
