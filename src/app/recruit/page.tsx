/* =======================================
 * 九州運輸 採用情報(RECRUIT)
 * URL: src/app/recruit/page.tsx
 * Created: 2026-1-16
 * Last updated: 2026-1-17
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';

import PageTitle from '@/components/PageTitle';
import ContainerRecruitHead from '@/components/recruit/ContainerRecruitHead';
import ContainerRecruitDailyFlow from '@/components/recruit/ContainerRecruitDailyFlow';
import ContainerRecruitBenefits from '@/components/recruit/ContainerRecruitBenefits';

export const generateMetadata = (): Metadata => {
  return {
    title: '採用情報｜熊本発・全国対応の物流サービス｜株式会社九州運輸',
    description: isRealProduction
      ? '株式会社九州運輸の保有車両ページです。熊本を拠点に全国へ物流サービスを展開する当社の企業理念、事業内容、沿革、体制など基本情報をわかりやすく紹介します。'
      : undefined,
  };
};
export default function PageRecruit() {
  return (
    <>
      <PageTitle titleEn="RECRUIT" titleJp="採用情報" variant="recruit" />
      <ContainerRecruitHead />
      <ContainerRecruitDailyFlow />
      <ContainerRecruitBenefits />
    </>
  );
}
