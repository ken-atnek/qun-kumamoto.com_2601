/* =======================================
 * 採用情報(RECRUIT)ページ｜先輩の声
 * URL: src/components/recruit/ContainerRecruitVoice.tsx
 * Created: 2026-1-17
 * Last updated: 2026-1-17
 * ======================================= */

import styles from '@/styles/PageRecruit.module.scss';
import Image from 'next/image';

export default function ContainerRecruitVoice() {
  return (
    <section
      className={styles.containerRecruitVoice}
      aria-labelledby="recruitVoice"
    >
      <article>
        <p className={styles.sidebarH3}>voice</p>
        <h3 className={styles.itemH3} id="recruitVoice">
          先輩社員の声
        </h3>
        <p className={styles.announce}>
          九州運輸に入社したきっかけ&やりがいは？先輩スタッフにインタビュー！
        </p>
        <div className={styles.boxHead}>
          <Image
            src="/images/recruit/voice01.webp"
            alt="入社2年目/九州管内配送ドライバー/上村さん"
            width={474}
            height={276}
          />
          <h4>入社2年目/九州管内配送ドライバー/上村さん</h4>
          <p>
            前職は介護士なのですが、昔から運転が好きで、憧れもあって入社しました。
            <br />
            大型の資格は持っていましたが、ドライバーは全くの未経験。研修制度や先輩たちにサポートしてもらい一人立ちしました!この仕事のやりがいは、時間を守るなど自分の誠実な姿勢が伝わって、お客様との信頼関係が築けたり次の受注に繋がること。また、行った土地ならではの美味しいもの食べて帰れるのもいいですね。うちの会社は本当に社員&家族想い。誕生日にケーキをホール1個!さらに年2回の国産和牛プレゼントだなんて太っ腹すぎますよね(笑)その晩、家族で美味しいすき焼きを楽しみました!奥さんや子どもたちも大喜びです!
            <br />
            ※誕生日ケーキプレゼントは近々商品券プレゼントへ変更予定です
          </p>
        </div>
        <div className={styles.boxBottom}>
          <div className={styles.wrapImage}>
            <Image
              src="/images/recruit/voice02.webp"
              alt="積み込み画像"
              width={480}
              height={321}
            />
            <p>
              ドライバーは個人プレイかと思われがちですが、当社はチームプレー重視。荷物の積み込みや配送準備など、社員同士が協力して作業しています。
            </p>
          </div>
          <div className={styles.wrapDetails}>
            <div className={styles.itemDetail}>
              <h4>資格支援制度で未経験でも安心</h4>
              <p>
                当社では未経験で入社後、
                <br />
                「資格支援制度」を活用して働きながらトラックドライバーとしての知識や経験を身につけて頂くことが可能です。この制度では取得に必要な費用は全額会社が負担!入社後は座学や実務研修などが充実していますので、未経験で入社した先輩たちも現在活躍中!
                <br />
                ※取得支援の対象資格
                <br />
                (中型・大型自動車運転免許、フォークリフト運転技能講習)
                <br />
                ※今回の募集では大型自動車運転免許の取得とフォークリフト運転技能講習の受講をお願いします
              </p>
            </div>
            <div className={styles.itemDetail}>
              <h4>人間関係の良さが自慢</h4>
              <p>
                社長が女性ということもあり、温かく和気藹々とした雰囲気の社風が魅力です。
                とにかく人間関係が良く、社長や部長、先輩たちもみんな優しい人ばかり!何か分からないことがあれば頼れるアニキたち(先輩ドライバー)が親切に教えてくれるから遠慮なく相談してください!「安心して僕たちの胸に飛び込んでくださいね(笑)」と先輩社員たち。
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
