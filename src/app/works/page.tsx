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
    title: '株式会社九州運輸',
    description: isRealProduction
      ? '株式会社九州運輸は、地域に根ざした物流サービスを通じて、安全・確実・迅速な輸送を提供しています。お客様の大切な荷物を責任を持ってお届けし、地域社会とともに成長し続ける運輸会社です。'
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
