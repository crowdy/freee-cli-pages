# wallet-txn — 口座明細

口座明細（ウォレット取引）の参照・作成・削除を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 口座明細一覧を表示 |
| `show <id>` | 口座明細の詳細を表示 |
| `create` | 口座明細を作成 |
| `delete <id>` | 口座明細を削除 |

## wallet-txn list

```
freee wallet-txn list [flags]
```

`--walletable-type` と `--walletable-id` は必ずセットで指定してください。

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--walletable-type` | string | 任意 | 口座種別: `bank_account` / `credit_card` / `wallet`（`--walletable-id` とセット） |
| `--walletable-id` | int64 | 任意 | 口座ID（`--walletable-type` とセット） |
| `--entry-side` | string | 任意 | 種別フィルタ: `income` / `expense` |
| `--from` | string | 任意 | 開始日 (YYYY-MM-DD) |
| `--to` | string | 任意 | 終了日 (YYYY-MM-DD) |
| `--limit` | int | 任意 | 1ページあたり最大件数（デフォルト: 20） |
| `--offset` | int | 任意 | ページネーション用オフセット |
| `--all` | bool | 任意 | 全ページを自動取得 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## wallet-txn show

```
freee wallet-txn show <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## wallet-txn create

```
freee wallet-txn create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--walletable-type` | string | **必須** | 口座種別: `bank_account` / `credit_card` / `wallet` |
| `--walletable-id` | int64 | **必須** | 口座ID |
| `--entry-side` | string | **必須** | 種別: `income` / `expense` |
| `--amount` | int64 | **必須** | 金額 |
| `--date` | string | **必須** | 取引日 (YYYY-MM-DD) |
| `--description` | string | 任意 | 摘要 |
| `--balance` | int64 | 任意 | 取引後残高 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## wallet-txn delete

```
freee wallet-txn delete <id> [--dry-run]
```

## 使用例

```bash
# 特定口座の明細一覧
freee wallet-txn list \
  --walletable-type bank_account \
  --walletable-id 1001 \
  --from 2026-04-01 --to 2026-04-30
```

```
ID     DATE        ENTRY_SIDE  AMOUNT   STATUS
77001  2026-04-01  expense     50000    unreconciled
77002  2026-04-02  income      200000   reconciled
```

```bash
# 口座明細の詳細
freee wallet-txn show 77001
```

```
ID:           77001
Date:         2026-04-01
Entry Side:   expense
Amount:       50000
Due Amount:   50000
Balance:      950000
Walletable:   bank_account:1001
Status:       unreconciled
Description:  仕入代金支払い
Rule Matched: false
```

```bash
# 口座明細を手動で作成
freee wallet-txn create \
  --walletable-type bank_account \
  --walletable-id 1001 \
  --entry-side expense \
  --amount 50000 \
  --date 2026-04-01 \
  --description "仕入代金支払い" \
  --balance 950000

# 口座明細を削除
freee wallet-txn delete 77001
```
