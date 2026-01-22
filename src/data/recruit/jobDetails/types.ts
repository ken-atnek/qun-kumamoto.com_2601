export type JobDetailValue = string | string[];

export type JobDetailRow = {
  label: string;
  value: JobDetailValue;
};

export type JobDetailSection = {
  id: string;
  rows: JobDetailRow[];
};

export type JobDetailFeatureItem = {
  label: string;
  values: string[];
};

export type RecruitJobDetailData = {
  id: string; // jobsIndex の id と一致（例：jobCard01）
  header?: {
    catch?: string; // 「未経験歓迎【賞与年3回】...」など
  };
  intro?: {
    imgSrc?: string; //画像
    imgText?: string[]; //画像
    titleMain: string; // 詳細ページの導入見出し
    titleMainText: string[]; // 導入文（複数段落OK）
    titleSub?: string; // 詳細ページの導入見出し
    titleSubText?: string[]; // 導入文（複数段落OK）
  };
  sections: JobDetailSection[];
  features?: JobDetailFeatureItem[];
};
