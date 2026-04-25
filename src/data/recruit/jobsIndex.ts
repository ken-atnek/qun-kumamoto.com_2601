/* =======================================
 * 採用情報(RECRUIT)｜一覧データ（カード用）
 * URL: src/data/recruit/jobsIndex.ts
 * Created: 2026-01-21
 * ======================================= */

export type RecruitJobIndexItem = {
  id: string;
  isOpen: boolean;
  sortOrder?: number;
  title: string;
  thumbSrc: string;
  highlights?: string;
  lead?: string;
  // アイコン付きメタ情報
  employmentType: string; // 例：正社員
  areaText: string; // 例：菊池市
  salaryText: string; // 例：月給 220,000〜240,000円
};

// 一覧カード用データ
// - 募集を開始するときは isOpen を true にして items に追加してください。
// - 募集停止中は isOpen: false にしておくと、表示側で除外できます。
export const recruitJobsIndex: RecruitJobIndexItem[] = [
  // ▼サンプル（必要になったらコメント外して編集）
  {
    id: 'jobCard01',
    isOpen: true,
    sortOrder: 0,
    title: '中型地場配送ドライバー（４t ）',
    thumbSrc: '/images/recruit/thumb-01.webp',
    highlights: '未経験から“月給25万円以上”も可能！安定して稼げるお仕事です',
    employmentType: '正社員',
    areaText: '菊池市',
    salaryText: '月給 250,000〜280,000円',
  },
  {
    id: 'jobCard02',
    isOpen: true,
    sortOrder: 0,
    title: '大型ドライバー(10t)',
    thumbSrc: '/images/recruit/thumb-03.webp',
    highlights: '10tトラックによる九州管内配送',
    employmentType: '正社員',
    areaText: '菊池市',
    salaryText: '月給 320,000〜350,000円',
  },
  {
    id: 'jobCard03',
    isOpen: true,
    sortOrder: 0,
    title: ' 中距離大型トラックドライバー',
    thumbSrc: '/images/recruit/thumb-03.webp',
    highlights: '大型トラック(10t)による九州管内配送、及び中距離配送',
    employmentType: '正社員',
    areaText: '菊池市',
    salaryText: '月給 350,000〜400,000円',
  },
];
