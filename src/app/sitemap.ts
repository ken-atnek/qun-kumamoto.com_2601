import type { MetadataRoute } from 'next';
import { isRealProduction } from '@/lib/env';
import { recruitJobsIndex } from '@/data/recruit/jobsIndex';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_METADATA_BASE || 'https://qun-kumamoto.com/';

const staticPaths = [
  '/',
  '/works/',
  '/company/',
  '/vehicles/',
  '/recruit/',
  '/contact/',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction) {
    return [];
  }

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));

  const recruitRoutes: MetadataRoute.Sitemap = recruitJobsIndex
    .filter((job) => job.isOpen)
    .map((job) => ({
      url: new URL(`/recruit/${job.id}/`, siteUrl).toString(),
    }));

  return [...staticRoutes, ...recruitRoutes];
}
