/* =======================================
 * 九州運輸 会社概要(COMPANY)
 * URL: src/app/company/page.tsx
 * Created: 2026-1-13
 * Last updated: 2026-1-13
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';

import PageTitle from '@/components/PageTitle';
import ContainerCompanyMessage from '@/components/company/ContainerCompanyMessage';
import ContainerSdgs from '@/components/ContainerSdgs';
import ContainerCompanyProfile from '@/components/company/ContainerCompanyProfile';
import ContainerCompanyCreed from '@/components/company/ContainerCompanyCreed';

export const generateMetadata = (): Metadata => {
  return {
    title: '会社概要｜熊本発・全国対応の物流サービス｜株式会社九州運輸',
    description: isRealProduction
      ? '株式会社九州運輸の会社概要ページです。熊本を拠点に全国へ物流サービスを展開する当社の企業理念、事業内容、沿革、体制など基本情報をわかりやすく紹介します。'
      : undefined,
  };
};
export default function PageCompany() {
  return (
    <>
      <PageTitle
        titleEn="COMPANY"
        titleJp="会社概要"
        description="地域密着と地域貢献をコンセプトに高品質輸送を展開"
        variant="company"
      />
      <ContainerCompanyMessage />
      <ContainerSdgs />
      <ContainerCompanyProfile />
      <ContainerCompanyCreed />
    </>
  );
}
