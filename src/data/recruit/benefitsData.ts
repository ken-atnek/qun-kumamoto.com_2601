// src/data/recruit/benefitsData.ts
export type BenefitItem = {
  no: string; // "01"
  title: string;
  description: string[];
  iconId: string; // "icon-benefit-01"
};

export const benefitsItems: BenefitItem[] = [
  {
    no: '01',
    title: '社会保障完備',
    description: ['社会保険、厚生年金、雇用保険、有給取得制度等があります。'],
    iconId: 'icon-benefit-01',
  },
  {
    no: '02',
    title: 'キャリアアップ制度',
    description: ['大型免許取得・フォークリフト免許取得費用を全額負担します。'],
    iconId: 'icon-benefit-02',
  },
  {
    no: '03',
    title: '充実した研修制度',
    description: [
      '社員のスキルに応じた必要とされる定期的な社内研修を実施いたします。',
    ],
    iconId: 'icon-benefit-03',
  },
  {
    no: '04',
    title: '定期健康診断',
    description: [
      '全運転者に年毎健康診断を受診しており、深夜時間従事者は年2回会社負担で、実施しております。',
    ],
    iconId: 'icon-benefit-04',
  },
  {
    no: '05',
    title: '再雇用制度',
    description: ['65歳定年後もご希望をいただければ継続的に雇用いたします。'],
    iconId: 'icon-benefit-05',
  },
  {
    no: '06',
    title: '制服貸与',
    description: ['制服、帽子、ヘルメットを支給いたします。'],
    iconId: 'icon-benefit-06',
  },
  {
    no: '07',
    title: '無事故無違反表彰制度',
    description: [
      '無事故・無違反で安全運転を継続した社員を毎年表彰しています。',
    ],
    iconId: 'icon-benefit-07',
  },
  {
    no: '08',
    title: '退職金制度',
    description: [
      '一定の期間、社業に従事された社員には退職金を支給いたします。',
    ],
    iconId: 'icon-benefit-08',
  },
  {
    no: '09',
    title: 'その他',
    description: [
      '「亀の甲温泉」入浴無料券支給',
      '誕生日には素敵なプレゼントが・・',
    ],
    iconId: 'icon-benefit-09',
  },
];
