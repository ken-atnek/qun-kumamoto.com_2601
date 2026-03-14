/* =======================================
 * 採用情報(RECRUIT)ページ｜詳細ページHEAD
 * URL:src/components/recruit/RecruitDetailsHead.tsx
 * Created: 2026-1-22
 * Last updated: 2026-1-22
 * ======================================= */
import styles from '@/styles/PageRecruitDetails.module.scss';
import Link from 'next/link';
import type { RecruitJobIndexItem } from '@/data/recruit/jobsIndex';
import type { RecruitJobDetailData } from '@/data/recruit/jobDetails/types';
import Image from 'next/image';

type Props = {
  job: RecruitJobIndexItem;
  detail: RecruitJobDetailData;
};

export default function RecruitDetailsHead({ job, detail }: Props) {
  const imageSrc01 = detail.intro?.imgSrc01;
  const imageSrc02 = detail.intro?.imgSrc02;

  return (
    <section
      className={styles.recruitDetailsHead}
      aria-labelledby="recruitDetailsHead"
    >
      <article>
        {/* パンくず */}
        <div className={styles.itemBreadcrumb}>
          <Link href="/">TOP</Link>
          <Link href="/recruit/">RECRUIT（採用情報）</Link>
          <p>{job.title}</p>
        </div>

        <h2 id="recruitDetailsHead">採用情報</h2>
        <span className={styles.titleEn}>RECRUIT</span>
        <h3>{job.title}</h3>

        {/* キャッチコピー（optional） */}
        {detail.header?.catch && (
          <p className={styles.sidebarTitle}>{detail.header.catch}</p>
        )}

        {/* 画像＋導入ブロック */}
        {detail.intro && (
          <div className={styles.introBlock}>
            <div className={styles.introImage}>
              {/* 画像（src undefined 防止） */}
              {imageSrc01 && (
                <Image
                  src={imageSrc01}
                  alt={job.title}
                  width={640}
                  height={420}
                />
              )}
              {imageSrc02 && (
                <Image
                  src={imageSrc02}
                  alt={job.title}
                  width={640}
                  height={420}
                />
              )}
            </div>

            <div className={styles.introText}>
              {/* メイン見出し */}
              <div>
                <h4>{detail.intro.titleMain}</h4>

                {detail.intro.titleMainText?.length ? (
                  <p>
                    {detail.intro.titleMainText.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>

              {/* サブ見出し（完全 optional） */}
              {detail.intro.titleSub && (
                <div>
                  <h4>{detail.intro.titleSub}</h4>

                  {detail.intro.titleSubText?.length ? (
                    <p>
                      {detail.intro.titleSubText.map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        )}
      </article>
    </section>
  );
}
