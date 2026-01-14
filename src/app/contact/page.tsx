/* =======================================
 * 九州運輸 ご依頼・お問い合わせ(CONTACT)
 * URL: src/app/contact/page.tsx
 * Created: 2026-1-14
 * Last updated: 2026-1-14
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';

import PageTitle from '@/components/PageTitle';
import ContainerContactForm from '@/components/contact/ContainerContactForm';

export const generateMetadata = (): Metadata => {
  return {
    title:
      'ご依頼・お問い合わせ｜熊本発・全国対応の物流サービス｜株式会社九州運輸',
    description: isRealProduction
      ? '株式会社九州運輸へのお問い合わせページです。物流・運送に関するご相談やご質問はこちらから受け付けております。'
      : undefined,
  };
};
export default function PageContact() {
  return (
    <>
      <PageTitle
        titleEn="CONTACT"
        titleJp="ご依頼・お問い合わせ"
        description="弊社へのご依頼・各種お問い合わせ・求人へのご応募は、下記フォームよりお問い合わせください。"
        variant="contact"
      />
      <ContainerContactForm />
    </>
  );
}
