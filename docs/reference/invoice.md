# invoice — 請求書

請求書のCRUD操作を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 請求書一覧を表示 |
| `show <id>` | 請求書の詳細を表示 |
| `create` | 請求書を作成 |
| `update <id>` | 請求書を更新 |
| `delete <id>` | 請求書を削除 |

## invoice list

```
freee invoice list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--status` | string | 任意 | ステータスフィルタ |
| `--partner` | string | 任意 | 取引先コードでフィルタ |
| `--from` | string | 任意 | 開始日 (YYYY-MM-DD) |
| `--to` | string | 任意 | 終了日 (YYYY-MM-DD) |
| `--limit` | int | 任意 | 1ページあたり最大件数（デフォルト: 50） |
| `--offset` | int | 任意 | ページネーション用オフセット |
| `--all` | bool | 任意 | 全ページを自動取得 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## invoice show

```
freee invoice show <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## invoice create

```
freee invoice create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--date` | string | **必須** | 発行日 (YYYY-MM-DD) |
| `--partner-id` | int64 | 任意 | 取引先ID（`--partner-name` と排他） |
| `--partner-name` | string | 任意 | 取引先名（IDに解決） |
| `--due-date` | string | 任意 | 支払期日 (YYYY-MM-DD) |
| `--title` | string | 任意 | 請求書タイトル |
| `--description` | string | 任意 | 備考 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## invoice update

```
freee invoice update <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--partner-id` | int64 | 任意 | 取引先ID |
| `--partner-name` | string | 任意 | 取引先名（IDに解決） |
| `--date` | string | 任意 | 発行日 (YYYY-MM-DD) |
| `--due-date` | string | 任意 | 支払期日 (YYYY-MM-DD) |
| `--title` | string | 任意 | 請求書タイトル |
| `--description` | string | 任意 | 備考 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## invoice delete

```
freee invoice delete <id> [--dry-run]
```

## 使用例

```bash
# 請求書一覧
freee invoice list
```

```
ID       NUMBER    PARTNER       AMOUNT    STATUS    ISSUE_DATE
9876543  INV-0001  株式会社XYZ   500000    draft     2026-04-01
9876544  INV-0002  株式会社ABC   200000    sent      2026-03-15
```

```bash
# 請求書の詳細
freee invoice show 9876543
```

```
ID:        9876543
Number:    INV-0001
Title:     4月分業務委託費
Partner:   株式会社XYZ
Amount:    500000
SubTotal:  454545
VAT:       45455
Status:    draft
Issue:     2026-04-01
Due:       2026-04-30
```

```bash
# 請求書を作成
freee invoice create \
  --date 2026-04-01 \
  --partner-name 株式会社XYZ \
  --due-date 2026-04-30 \
  --title "4月分業務委託費"

# 支払期日を更新
freee invoice update 9876543 --due-date 2026-05-15

# 請求書を削除
freee invoice delete 9876543
```
