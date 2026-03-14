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
    highlights: '10tトラックによるルート配送担当',
    employmentType: '正社員',
    areaText: '菊池市',
    salaryText: '月給30万円以上＋賞与年3回支給',
  },
  {
    id: 'jobCard03',
    isOpen: true,
    sortOrder: 0,
    title: ' 大型トラック乗務員【１０ｔ車】',
    thumbSrc: '/images/recruit/thumb-03.webp',
    highlights: '大型トラック乗務員業務',
    employmentType: '正社員',
    areaText: '菊池市',
    salaryText: '基本給 17万円 〜 ＋手当',
  },
];
