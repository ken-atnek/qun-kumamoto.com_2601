/* =======================================
 * 九州運輸 事業内容(WORKS)
 * URL: src/app/works/page.tsx
 * Created: 2026-1-12
 * Last updated: 2026-1-12
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';

import PageTitle from '@/components/PageTitle';
import ContainerWorksService from '@/components/works/ContainerWorksService';
import ContainerWorksRequest from '@/components/works/ContainerWorksRequest';

export const generateMetadata = (): Metadata => {
  return {
    title: '事業内容｜熊本発・全国対応の物流サービス｜株式会社九州運輸',
    description: isRealProduction
      ? '熊本を拠点に、県内から全国へ物流・輸送サービスを展開する株式会社九州運輸。個別配送便、チャーター便、スポット便、倉庫保管、積替え輸送など、多様なニーズに柔軟に対応しています。'
      : undefined,
  };
};
export default function PageWorks() {
  return (
    <>
      <PageTitle
        titleEn="WORKS"
        titleJp="業務内容"
        description="地域密着と地域貢献をコンセプトに高品質輸送を展開"
        variant="works"
      />
      <ContainerWorksService />
      <ContainerWorksRequest />
    </>
  );
}
