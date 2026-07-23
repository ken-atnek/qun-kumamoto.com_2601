# SEO初期設定メモ

このファイルは、株式会社九州運輸サイト立ち上げ時のSEO設計メモです。  
コンテンツ未確定のため、まずは必要項目の枠だけ用意します。

---

## サイト基本情報

- サイト名: 株式会社九州運輸
- 会社名: 株式会社九州運輸
- 現行サイトURL:
- ドメイン: `qun-kumamoto.com`
- 公開URL:
- 公開ステータス:
- 案件種別: コーポレートサイト制作
- 現行トップ title 参考: `株式会社九州運輸｜熊本発・全国対応の物流サービス`

---

## 立ち上げ時の確認項目

- `title` / `description` の初期方針確認
- 公開URL一覧の整理
- 指名検索で使われる会社名表記の確認
- `熊本` `物流` `運輸` `全国対応` など主要訴求語の整理
- 事業内容ページ、採用ページ、車両紹介ページの検索流入想定確認

---

## ページ別メタ情報

### トップページ `/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 事業内容 `/works/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 会社情報 `/company/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 車両紹介 `/vehicles/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 採用情報 `/recruit/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 採用詳細 `/recruit/[id]/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### お問い合わせ `/contact/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

---

## 初期実装で必要なSEO項目

- `metadata`
  - 現状: `src/app/layout.tsx` と一部ページで実装あり
- `robots.ts`
  - 現状: 未実装
- `sitemap.ts`
  - 現状: 未実装
- OGP画像の管理方針
- canonical設計
- 会社名表記のゆれ整理
- `熊本` `物流` `運輸` `全国対応` など地域・業種キーワード整理

---

## デモ公開 / 本番公開の切り替え方針

- デモ公開時と本番公開時で、SEO系の出力を切り替える
- 判定は `NEXT_PUBLIC_IS_REAL_PROD` を使う
- `true` の時だけ本番SEOを有効にする
- `false` の時はデモ公開扱いにして `noindex` 系にする

### 基本方針

- `src/lib/env.ts` に `isRealProduction` を用意する
- `src/app/layout.tsx` の `metadata` は `isRealProduction` で分岐する
- 本番時だけ `metadataBase` / `openGraph` / `twitter` を有効にする
- デモ時は `robots: 'noindex, nofollow'` を返す
- `src/app/robots.ts` は追加後、デモ時に `disallow: '/'` を返す
- `src/app/sitemap.ts` は追加後、デモ時に空配列を返す

### 想定ファイル

- `src/lib/env.ts`
- `src/app/layout.tsx`
- `src/app/robots.ts`
  - 現状: 未作成
- `src/app/sitemap.ts`
  - 現状: 未作成

### `src/lib/env.ts` 例

```ts
export const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';
```

### `layout.tsx` 側の考え方

- `metadataBase` は本番時だけ設定する
- OGP URL や canonical の基準URLも本番時だけ有効にする
- デモURLを検索エンジンに正規URLとして認識させない

### 注意点

- `NEXT_PUBLIC_METADATA_BASE` は `build:demo` / `build:prod` で切り替える
- `NEXT_PUBLIC_METADATA_BASE` は末尾 `/` の有無に依存しないように扱う
- `robots.ts` と `sitemap.ts` を追加する時は、URL生成を文字列連結ではなく `new URL()` で行う
- デモ時に `metadataBase` を常時出すと、意図しないURLで canonical / OGP が生成されやすい
- `robots.ts` と `sitemap.ts` を追加する時は `force-static` を付けた上で、本番判定を合わせる
- GA4 などの計測タグは本番時だけ読み込む
- この切り替えは他案件でも再利用する前提で残す

---

## 現在の実装状況

- `src/app/layout.tsx`
  - `metadataBase` の本番分岐あり
  - デモ時 `noindex, nofollow` の制御あり
- `src/app/page.tsx`
  - トップページ用の `title` / `description` あり
- `src/app/robots.ts`
  - 未実装
- `src/app/sitemap.ts`
  - 未実装

---

## 注意点

- 仮公開中は `noindex` を検討
- 本番URL確定前に canonical を仮置きしすぎない
- title / description は後から差し替え前提でOK
- 地域名と業種名を含む主要キーワードは早めに整理する
