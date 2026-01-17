/* =======================================
 * 1日の業務の流れ（データ）
 * URL: src/data/recruit/dailyFlowData.ts
 * ======================================= */

export type DailyFlowItem = {
  time?: string;
  title?: string;
  sub?: string[];
  variant?: string;
};

export type DailyFlowColumn = {
  label: string;
  items: DailyFlowItem[];
};

export const dailyFlowData: DailyFlowColumn[] = [
  {
    label: '現地での積込の場合1',
    items: [
      { time: '4:00', title: '出社', sub: ['点呼・日常点検'] },
      { time: '5:00', title: '出発', sub: ['移動'] },
      { time: '6:00', title: '現地到着', sub: ['点呼・日常点検'] },
      {
        time: '7:00',
        title: '出発',
        sub: ['ルート配送', '※適宜休憩'],
        variant: 'large',
      },
      { time: '15:00', title: '配送完了', sub: ['点呼・日常点検'] },
      { time: '16:00', title: '帰社', sub: ['日報提出・点呼'] },
      { sub: ['退社'], variant: 'end' },
    ],
  },
  {
    label: '現地での積込の場合2',
    items: [
      { time: '12:00', title: '出社', sub: ['点呼・日常点検・積込作業'] },
      { time: '13:00', title: '出発', sub: ['移動'] },
      { time: '14:00', title: '現地到着', sub: ['積込作業'] },
      {
        time: '15:00',
        title: '出発',
        sub: ['ルート配送', '※適宜休憩'],
        variant: 'large',
      },
      { time: '20:00', title: '配送完了', sub: ['点呼・日常点検'] },
      { time: '20:30', title: '帰社', sub: ['日報提出・点呼'] },
      { sub: ['退社'], variant: 'end' },
    ],
  },
  {
    label: '会社での積込スタートの場合',
    items: [
      {
        time: '8:00',
        title: '出社',
        sub: ['点呼・日常点検・積込作業・確認'],
      },
      { time: '9:00', title: '出発', sub: ['移動'] },
      { time: '10:00', title: '納品目的地1到着', sub: ['納品作業'] },
      { time: '11:00', title: '納品目的地2到着', sub: ['納品作業'] },
      { time: '12:00', title: '休憩', sub: ['60分'] },
      { time: '13:00', title: '出発', sub: ['移動・※適宜休憩'] },
      {
        time: '14:00',
        title: '帰社',
        sub: [
          '日常点検',
          '▼',
          '翌日準備',
          '作業内容確認、積込作業',
          '▼',
          '日報提出、点呼',
        ],
      },
      { time: '17:00', title: '退社', variant: 'box3-end' },
    ],
  },
];
