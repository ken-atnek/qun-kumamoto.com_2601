/* =======================================
 * 九州運輸 保有車両(vehicles)
 * URL: src/app/vehicles/page.tsx
 * Created: 2026-1-15
 * Last updated: 2026-1-15
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';

import PageTitle from '@/components/PageTitle';
import ContainerVehiclesList from '@/components/vehicles/ContainerVehiclesList';

export const generateMetadata = (): Metadata => {
  return {
    title: '保有車両｜熊本発・全国対応の物流サービス｜株式会社九州運輸',
    description: isRealProduction
      ? '株式会社九州運輸の保有車両ページです。熊本を拠点に全国へ物流サービスを展開する当社の企業理念、事業内容、沿革、体制など基本情報をわかりやすく紹介します。'
      : undefined,
  };
};
export default function PageVehicles() {
  return (
    <>
      <PageTitle
        titleEn="VEHICLES"
        titleJp="保有車両"
        catchCopy="県内～全国へどこまでも、熊本の旬を運ぶ。"
        description="地域密着と地域貢献をコンセプトに高品質輸送を展開"
        variant="vehicles"
      />
      <ContainerVehiclesList />
    </>
  );
}
