# クイックスタート

ログインから取引の作成・確認までを一通り試します。

## 1. ログイン

```bash
freee auth login
```

ブラウザでfreeeアカウントにログインし、アプリを承認します。

## 2. 事業所の確認

```bash
freee company list
```
```
ID       NAME               DISPLAY_NAME
1234567  サンプル株式会社     サンプル株式会社
```

## 3. マスタデータの確認

```bash
# 勘定科目一覧
freee account list

# 取引先一覧
freee partner list

# 部門一覧
freee section list
```

## 4. 取引の作成

```bash
freee deal create \
  --type expense \
  --date 2026-04-01 \
  --account-item-id 101 \
  --amount 50000 \
  --partner-id 12345 \
  --description "4月分サーバー費用"
```

::: tip dry-runで確認
`--dry-run` をつけると、APIを呼ばずにリクエスト内容を確認できます。

```bash
freee deal create --dry-run \
  --type expense \
  --date 2026-04-01 \
  --amount 50000
```
:::

## 5. 取引の確認

```bash
# 一覧（今月）
freee deal list

# JSON出力
freee deal list --format json

# 全件取得（自動ページネーション）
freee deal list --all

# 前年度の取引
freee deal list --fiscal-year 2025
```

## 6. その他のコマンド

```bash
# 経費申請の一覧
freee expense list

# 請求書の一覧
freee invoice list

# 口座振替の一覧
freee transfer list

# 口座明細の一覧
freee wallet-txn list

# 仕訳帳の確認
freee journal show
```

## 次のステップ

- [レシピ](/recipe/monthly-unsettled) — 実務で使えるワークフロー例
- [コマンドリファレンス](/reference/auth) — 全コマンドの詳細
