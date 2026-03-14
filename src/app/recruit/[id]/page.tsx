/* =======================================
 * 九州運輸 採用情報(RECRUIT)詳細ページ
 * URL: src/app/recruit/[id]/page.tsx
 * ======================================= */

import { notFound } from 'next/navigation';
import { recruitJobsIndex } from '@/data/recruit/jobsIndex';
import RecruitDetailsHead from '@/components/recruit/RecruitDetailsHead';
import RecruitDetailsContents from '@/components/recruit/RecruitDetailsContents';

// ▼ 詳細データ
import { jobCard01Detail } from '@/data/recruit/jobDetails/jobCard01';
import { jobCard02Detail } from '@/data/recruit/jobDetails/jobCard02';
import { jobCard03Detail } from '@/data/recruit/jobDetails/jobCard03';

import RecruitDetailsJobList from '@/components/recruit/RecruitDetailsJobList';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const jobDetailsMap = {
  [jobCard01Detail.id]: jobCard01Detail,
  [jobCard02Detail.id]: jobCard02Detail,
  [jobCard03Detail.id]: jobCard03Detail,
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

  const detail = jobDetailsMap[id as keyof typeof jobDetailsMap] ?? null;

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
