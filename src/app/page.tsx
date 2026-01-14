/* =======================================
 * 九州運輸 TOPページ
 * URL: src/app/page.tsx
 * Created: 2025-12-30
 * Last updated: 2026-1-10
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';
import ContainerTopHero from '@/components/top/ContainerTopHero';
import ContainerTopWorks from '@/components/top/ContainerTopWorks';
import ContainerTopCompany from '@/components/top/ContainerTopCompany';
import ContainerSdgs from '@/components/ContainerSdgs';
import ContainerTopRecruit from '@/components/top/ContainerTopRecruit';

export const generateMetadata = (): Metadata => {
  return {
    title: '株式会社九州運輸｜熊本発・全国対応の物流サービス',
    description: isRealProduction
      ? '株式会社九州運輸は、地域に根ざした物流サービスを通じて、安全・確実・迅速な輸送を提供しています。お客様の大切な荷物を責任を持ってお届けし、地域社会とともに成長し続ける運輸会社です。'
      : undefined,
  };
};
export default function PageTop() {
  return (
    <>
      <ContainerTopHero />
      <ContainerTopWorks />
      <ContainerTopCompany />
      <ContainerSdgs />
      <ContainerTopRecruit />
    </>
  );
}
