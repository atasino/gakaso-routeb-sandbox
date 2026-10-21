# gakaso-routeb-sandbox

**これは架空のサンプルサイトです。** 株式会社Atasino が、Gakaso の「ルート B」（GitHub Action がリポジトリを解析 → 変更要求 → PR → CI → merge → GitHub Pages 自動デプロイ → Gakaso が本番を確認）を端から端まで試すために運用する公開の試験用リポジトリです。サイトに出てくる「サンプルベーカリー（架空）」の店名・住所・電話番号・価格はすべて架空で、実在の店舗・団体・個人とは関係ありません。

This is a fictional sandbox operated by Atasino Inc. (株式会社Atasino) to test Gakaso's route B. Nothing here refers to a real business, customer or person.

## 中身

- Next.js 15（App Router）+ React 19 の小さなサイト。Supabase などの外部サービスは使いません（データは `lib/` の定数）。
- ルート: `/`、`/about`、`/services`、`/services/[slug]`（`bread-subscription` / `cake-order` / `catering` の 3 件を `generateStaticParams` で生成）、`/contact`。共通のナビ（`components/SiteNav.tsx`）とフッター（`components/SiteFooter.tsx`）。
- 内部リンクはすべて `next/link` の `<Link>`（`basePath` が自動で付くため）。
- 静的書き出し（`output: 'export'`）。`basePath` は `/gakaso-routeb-sandbox`、公開先は `https://atasino.github.io/gakaso-routeb-sandbox/`。

## 手元で動かす

```
npm ci
npm run dev        # http://localhost:3000/gakaso-routeb-sandbox/
npm run build      # out/ に静的書き出し
```

Node 20 以上。依存は完全固定（`package-lock.json` あり）。

## ワークフロー

| ファイル | いつ | 何をする |
|---|---|---|
| `.github/workflows/pages.yml` | `main` への push | ビルドして GitHub Pages へデプロイ（`environment: github-pages`。GitHub がコミットごとのデプロイと状態を記録する） |
| `.github/workflows/gakaso.yml` | `main` への push と pull_request | Gakaso の Action が解析器でリポジトリを読み、構造（ソース本文は含まない）だけを Gakaso へ送る。認証は GitHub の OIDC トークン（secrets 不要）。PR には検証結果のコメントが 1 件付く |

## GitHub 側で 1 回だけ要る設定

1. Settings → Pages → Build and deployment → Source = **GitHub Actions**。
2. Settings → Secrets and variables → Actions → Variables に **`GAKASO_PROJECT_ID`**（Gakaso のプロジェクト ID）。
3. Gakaso の GitHub App をこのリポジトリにインストールし、Gakaso 側のプロジェクトの GitHub 画面から**このリポジトリを接続し直して**インストールに束縛する（束縛されていないプロジェクトは `project_not_bound` で断られる）。
4. `gakaso.yml` の `uses: gakaso/action@v1` は GAK-590 の仮の名前。Action を公開したら実際の `owner/repo@tag` に置き換える。
5. Gakaso 側: フラグ `model_route_a` / `model_route_b_action` / `model_route_b_deploy_check` を試験環境で ON。追跡する枝（プロジェクトの `github_branch`）は `main`。

## ルート B の試験手順

1. `main` に push → `pages.yml` でサイトが公開され、`gakaso.yml` で最初のモデルが Gakaso に取り込まれる。
2. Gakaso で、このサイトに小さな変更を要求する（例: 「`/contact` の受付時間を 10:00〜17:00 に変える」「ナビに `/news` を足す」）。
3. 変更が PR になる。PR の CI（`gakaso.yml`）が走り、「頼んだとおりか・頼んでいない変更はないか・整合の決まり R1〜R3」のコメントが 1 件付く。
4. PR を merge する（merge は人）。
5. `pages.yml` が走り、GitHub Pages へ自動デプロイされる。
6. Gakaso が、デプロイの結果の読み取りと本番の確認（ページ・リンク・本番のコミット）を行う。
7. 破れの確認: 存在しないページへのリンクを入れた PR で R1 の違反が出ること、壊れたデプロイで取り消し PR の提案が出ること。

## 既知の制約（試験の前に読むこと）

- 本番の確認（GAK-591）は、巡回の前に**ドメインの持ち主を DNS の TXT で確かめる**。`atasino.github.io` は GitHub のドメインなので TXT を足せず、このままでは巡回は保留（未検査）になる。巡回まで試すには、Pages にカスタムドメイン（自社が DNS を持つもの）を設定し、`next.config.mjs` の `basePath` を外す。
- `robots.txt` はサイトの根にしか置けないため、project site では Gakaso 側の `robots.txt` の確認は `github.io` の根のものになる。
