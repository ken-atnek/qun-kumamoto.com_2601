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
    title: '中型九州管内ドライバー【4t車】定期パン配送',
    thumbSrc: '/images/recruit/thumb-driver-4t.webp',
    highlights: '未経験歓迎【賞与年3回】資格取得支援あり',
    lead: '☆あなたの活躍が九州の物流を支える',
    employmentType: '正社員',
    areaText: '菊池市',
    salaryText: '月給 220,000〜240,000円',
  },
];
