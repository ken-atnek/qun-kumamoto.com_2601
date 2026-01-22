/* =======================================
 * 九州運輸 採用情報(RECRUIT)詳細ページ
 * URL: src/app/recruit/[id]/page.tsx
 * ======================================= */

import { notFound } from 'next/navigation';
import { recruitJobsIndex } from '@/data/recruit/jobsIndex';
import RecruitDetailsHead from '@/components/recruit/RecruitDetailsHead';
import RecruitDetailsContents from '@/components/recruit/RecruitDetailsContents';

// ▼ 詳細データ（とりあえず jobCard01 のみ）
import { jobCard01Detail } from '@/data/recruit/jobDetails/jobCard01';
import RecruitDetailsJobList from '@/components/recruit/RecruitDetailsJobList';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

// 静的書き出し用（output: 'export' 運用）
export function generateStaticParams() {
  return recruitJobsIndex.map((job) => ({
    id: job.id,
  }));
}

export default async function RecruitJobDetailPage(props: PageProps) {
  const { id } = await props.params;

  if (!id) notFound();

  const job = recruitJobsIndex.find((j) => j.id === id);
  if (!job) notFound();

  const detail = id === jobCard01Detail.id ? jobCard01Detail : null;
  if (!detail) notFound();

  return (
    <>
      <RecruitDetailsHead job={job} detail={detail} />
      <RecruitDetailsContents
        sections={detail.sections}
        features={detail.features}
      />
      <RecruitDetailsJobList />
    </>
  );
}
