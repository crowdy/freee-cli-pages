# deal — 取引

取引（売上・経費）のCRUD操作を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 取引一覧を表示 |
| `show <id>` | 取引の詳細を表示 |
| `create` | 取引を作成 |
| `update <id>` | 取引を更新 |
| `delete <id>` | 取引を削除 |

## deal list

```
freee deal list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--type` | string | 任意 | 種別フィルタ: `income` / `expense` |
| `--partner` | string | 任意 | 取引先コードでフィルタ |
| `--from` | string | 任意 | 開始日 (YYYY-MM-DD) |
| `--to` | string | 任意 | 終了日 (YYYY-MM-DD) |
| `--status` | string | 任意 | 状態フィルタ: `settled` / `unsettled` |
| `--limit` | int | 任意 | 1ページあたり最大件数（デフォルト: 50） |
| `--offset` | int | 任意 | ページネーション用オフセット |
| `--all` | bool | 任意 | 全ページを自動取得 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## deal show

```
freee deal show <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## deal create

```
freee deal create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--type` | string | **必須** | 種別: `income` / `expense` |
| `--date` | string | **必須** | 発生日 (YYYY-MM-DD) |
| `--amount` | int64 | **必須** | 金額 |
| `--account-item-id` | int64 | **必須** | 勘定科目ID（`--account-name` と排他） |
| `--account-name` | string | 任意 | 勘定科目名（IDに解決） |
| `--account-item-name` | string | 任意 | `--account-name` のエイリアス |
| `--partner-id` | int64 | 任意 | 取引先ID（`--partner-name` と排他） |
| `--partner-name` | string | 任意 | 取引先名（IDに解決） |
| `--tax-code` | int64 | 任意 | 税区分コード |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## deal update

```
freee deal update <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--type` | string | 任意 | 種別: `income` / `expense` |
| `--date` | string | 任意 | 発生日 (YYYY-MM-DD) |
| `--amount` | int64 | 任意 | 金額 |
| `--account-item-id` | int64 | 任意 | 勘定科目ID |
| `--account-name` | string | 任意 | 勘定科目名（IDに解決） |
| `--account-item-name` | string | 任意 | `--account-name` のエイリアス |
| `--partner-id` | int64 | 任意 | 取引先ID |
| `--partner-name` | string | 任意 | 取引先名（IDに解決） |
| `--tax-code` | int64 | 任意 | 税区分コード |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## deal delete

```
freee deal delete <id> [--dry-run]
```

## 使用例

```bash
# 取引一覧
freee deal list
```

```
ID        DATE        TYPE     AMOUNT   STATUS
12345678  2026-04-01  expense  50000    settled
12345679  2026-04-01  income   120000   unsettled
```

```bash
# 今年の未決済取引をすべて取得
freee deal list --status unsettled --all

# 経費取引を作成（勘定科目名で指定）
freee deal create \
  --type expense \
  --date 2026-04-01 \
  --account-name 旅費交通費 \
  --partner-name 株式会社ABC \
  --amount 5000

# 取引を確認してから作成
freee deal create --type income --date 2026-04-01 \
  --account-item-id 100 --amount 100000 --dry-run

# 取引の詳細をJSON形式で取得
freee deal show 12345678 --format json

# 取引の金額を更新
freee deal update 12345678 --amount 55000

# 取引を削除
freee deal delete 12345678
```
