/* =======================================
 * 業務内容(WORKS)ページ｜会社概要
 * URL: src/components/company/ContainerCompanyProfile.tsx
 * Created: 2026-1-13
 * Last updated: 2026-1-13
 * ======================================= */

import styles from '@/styles/PageCompany.module.scss';

export default function ContainerCompanyProfile() {
  return (
    <section className={styles.containerCompanyProfile}>
      <article>
        <div className={styles.boxDetails}>
          <span className={styles.sidebarH3}>Company Profile</span>
          <h3>会社概要</h3>
          <dl>
            <div>
              <dt>会社名</dt>
              <dd>株式会社九州運輸</dd>
            </div>

            <div>
              <dt>住所</dt>
              <dd>熊本県菊池市泗水町田島2724-1</dd>
            </div>

            <div>
              <dt>TEL</dt>
              <dd>0968-38-3515</dd>
            </div>

            <div>
              <dt>FAX</dt>
              <dd>0968-38-3715</dd>
            </div>

            <div>
              <dt>創業</dt>
              <dd>昭和48年3月</dd>
            </div>

            <div>
              <dt>創立</dt>
              <dd>昭和51年5月</dd>
            </div>

            <div>
              <dt>資本金</dt>
              <dd>1,000万円</dd>
            </div>

            <div>
              <dt>従業員数</dt>
              <dd>50名</dd>
            </div>

            <div>
              <dt>取引銀行</dt>
              <dd>
                みずほ銀行 熊本支店
                <br />
                肥後銀行 泗水支店
              </dd>
            </div>

            <div>
              <dt>
                事業内容
                <br />
                （許認可）
              </dt>
              <dd>
                一般貨物自動車運送事業
                <br />
                自動車運送取扱事業
                <br />
                倉庫業・産業廃棄物収集運搬事業
              </dd>
            </div>

            <div>
              <dt>施設等</dt>
              <dd>
                敷地面積：26,400㎡
                <br />
                倉庫：17,000㎡
                <br />
                事務所：170㎡
              </dd>
            </div>

            <div>
              <dt>車両台数総数</dt>
              <dd>
                48台
                <br />
                10t車27台・4t車13台・2t車5台
              </dd>
            </div>

            <div>
              <dt>関連会社</dt>
              <dd>
                有限会社九州商事
                <br />
                農業法人 亀の甲ファーム
                <br />
                亀の甲温泉
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </section>
  );
}
