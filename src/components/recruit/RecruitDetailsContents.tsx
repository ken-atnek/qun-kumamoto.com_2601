/* =======================================
 * 採用情報(RECRUIT) 詳細ページ｜募集要項（sections）描画
 * URL: src/components/recruit/DetailsContents.tsx
 * Created: 2026-1-22
 * Last updated: 2026-1-22
 * ======================================= */
import styles from '@/styles/PageRecruitDetails.module.scss';
import type {
  JobDetailSection,
  JobDetailFeatureItem,
} from '@/data/recruit/jobDetails/types';
import Link from 'next/link';

type Props = {
  sections: JobDetailSection[];
  features?: JobDetailFeatureItem[];
};

export default function RecruitDetailsContents({
  sections,
  features = [],
}: Props) {
  return (
    <>
      <section className={styles.recruitDetailsContents}>
        <article>
          <span className={styles.titleEn}>Job Description</span>
          <h3>募集要項</h3>
          {sections.map((section) => (
            <dl key={section.id} className={styles.listMain}>
              {section.rows.map((row, index) => (
                <div key={index}>
                  <dt>{row.label}</dt>
                  <dd>
                    {Array.isArray(row.value) ? (
                      row.value.map((line, i) =>
                        line === '' ? (
                          <p key={i}>&nbsp;</p>
                        ) : (
                          <p key={i}>{line}</p>
                        )
                      )
                    ) : (
                      <p>{row.value}</p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          ))}
          <Link href="/contact/" className={styles.linkContact}>
            <span>求人応募はこちら</span>
            <i></i>
          </Link>
          {features.length ? (
            <div className={styles.listSub}>
              {features.map((block) => (
                <dl key={block.label}>
                  <dt>{block.label}</dt>
                  <dd>
                    {block.values.map((v, i) => (
                      <p key={i}>{v}</p>
                    ))}
                  </dd>
                </dl>
              ))}
            </div>
          ) : null}
        </article>
      </section>
    </>
  );
}
