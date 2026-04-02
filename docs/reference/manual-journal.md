# manual-journal — 振替伝票

振替伝票のCRUD操作を行います。シンプルモード（1:1仕訳）とJSONモード（複数行仕訳）に対応します。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 振替伝票一覧を表示 |
| `show <id>` | 振替伝票の詳細を表示 |
| `create` | 振替伝票を作成 |
| `update <id>` | 振替伝票を更新 |
| `delete <id>` | 振替伝票を削除 |

## manual-journal list

```
freee manual-journal list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--from` | string | 任意 | 開始日 (YYYY-MM-DD) |
| `--to` | string | 任意 | 終了日 (YYYY-MM-DD) |
| `--entry-side` | string | 任意 | 仕訳側フィルタ: `debit` / `credit` |
| `--account-item-id` | int64 | 任意 | 勘定科目IDフィルタ |
| `--partner-id` | int64 | 任意 | 取引先IDフィルタ |
| `--adjustment` | string | 任意 | 決算整理フィルタ: `only` / `without` |
| `--min-amount` | int64 | 任意 | 金額下限フィルタ |
| `--max-amount` | int64 | 任意 | 金額上限フィルタ |
| `--item-id` | int64 | 任意 | 品目IDフィルタ |
| `--section-id` | int64 | 任意 | 部門IDフィルタ |
| `--txn-number` | string | 任意 | 仕訳番号フィルタ |
| `--limit` | int | 任意 | 1ページあたり最大件数（デフォルト: 50） |
| `--offset` | int | 任意 | ページネーション用オフセット |
| `--all` | bool | 任意 | 全ページを自動取得 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## manual-journal show

```
freee manual-journal show <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## manual-journal create

シンプルモードとJSONモードは排他です。どちらか一方を使用してください。

```
freee manual-journal create [flags]
```

### 共通フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--date` | string | **必須** | 発生日 (YYYY-MM-DD) |
| `--adjustment` | bool | 任意 | 決算整理仕訳としてマーク |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

### シンプルモード フラグ（1:1仕訳）

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--debit-account-id` | int64 | 任意 | 借方勘定科目ID（`--debit-account-name` と排他） |
| `--debit-account-name` | string | 任意 | 借方勘定科目名（IDに解決） |
| `--credit-account-id` | int64 | 任意 | 貸方勘定科目ID（`--credit-account-name` と排他） |
| `--credit-account-name` | string | 任意 | 貸方勘定科目名（IDに解決） |
| `--amount` | int64 | 任意 | 金額 |
| `--tax-code` | int64 | 任意 | 税区分コード（シンプルモードでは必須） |
| `--description` | string | 任意 | 摘要 |

### JSONモード フラグ（複数行仕訳）

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--details-json` | string | 任意 | 仕訳明細をJSON文字列で指定 |
| `--details-file` | string | 任意 | 仕訳明細をJSONファイルパスで指定 |

## manual-journal update

```
freee manual-journal update <id> [flags]
```

シンプルモード・JSONモードのフラグは `create` と同様です。フラグ未指定の明細は現在の値を維持します。

### 追加フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--date` | string | 任意 | 発生日 (YYYY-MM-DD) |
| `--adjustment` | bool | 任意 | 決算整理仕訳フラグ |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## manual-journal delete

```
freee manual-journal delete <id> [--dry-run]
```

## 使用例

```bash
# シンプルモード：1:1仕訳を作成
freee manual-journal create \
  --date 2026-04-01 \
  --debit-account-name 旅費交通費 \
  --credit-account-name 未払費用 \
  --amount 5000 \
  --tax-code 1 \
  --description "出張交通費"

# JSONモード：複数行仕訳を作成
freee manual-journal create \
  --date 2026-04-01 \
  --details-json '[
    {"entry_side":"debit","account_item_id":210,"amount":10000,"tax_code":1,"description":"交通費"},
    {"entry_side":"debit","account_item_id":220,"amount":5000,"tax_code":1,"description":"宿泊費"},
    {"entry_side":"credit","account_item_id":400,"amount":15000,"tax_code":0,"description":"仮払精算"}
  ]'

# ファイルから仕訳明細を読み込む
freee manual-journal create --date 2026-04-01 --details-file ./entries.json

# 振替伝票一覧
freee manual-journal list --from 2026-04-01 --to 2026-04-30
```

```
ID     DATE        ADJUSTMENT  LINES
55001  2026-04-01  false       2
55002  2026-04-01  false       3
```

```bash
# 振替伝票の詳細
freee manual-journal show 55001
```

```
ID:         55001
Date:       2026-04-01
Adjustment: No
Details:
  [1] debit  Account:210 Amount:5000 VAT:500  Tax:1 "出張交通費"
  [2] credit Account:400 Amount:5000 VAT:500  Tax:1 "出張交通費"
```

::: warning JSONモード バリデーション
借方合計と貸方合計が一致しない場合はエラーになります。
明細行の合計は最大100行です。各行に `tax_code` が必須です。
:::
