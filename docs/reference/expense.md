# expense — 経費申請

経費申請のCRUD操作を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 経費申請一覧を表示 |
| `show <id>` | 経費申請の詳細を表示 |
| `create` | 経費申請を作成 |
| `update <id>` | 経費申請を更新 |
| `delete <id>` | 経費申請を削除 |

## expense list

```
freee expense list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--status` | string | 任意 | ステータスフィルタ |
| `--from` | string | 任意 | 開始日 (YYYY-MM-DD) |
| `--to` | string | 任意 | 終了日 (YYYY-MM-DD) |
| `--limit` | int | 任意 | 1ページあたり最大件数（デフォルト: 50） |
| `--offset` | int | 任意 | ページネーション用オフセット |
| `--all` | bool | 任意 | 全ページを自動取得 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## expense show

```
freee expense show <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## expense create

```
freee expense create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--title` | string | **必須** | 申請タイトル |
| `--date` | string | **必須** | 申請日 (YYYY-MM-DD) |
| `--description` | string | 任意 | 備考 |
| `--account-item-id` | int64 | 任意 | 勘定科目ID（`--account-name` と排他） |
| `--account-name` | string | 任意 | 勘定科目名（IDに解決） |
| `--account-item-name` | string | 任意 | `--account-name` のエイリアス |
| `--amount` | int64 | 任意 | 金額 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## expense update

```
freee expense update <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--title` | string | 任意 | 申請タイトル |
| `--date` | string | 任意 | 申請日 (YYYY-MM-DD) |
| `--description` | string | 任意 | 備考 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## expense delete

```
freee expense delete <id> [--dry-run]
```

## 使用例

```bash
# 経費申請一覧
freee expense list
```

```
ID     TITLE           AMOUNT  STATUS   DATE
88001  出張交通費申請   15000   draft    2026-04-01
88002  備品購入申請     30000   approved 2026-03-28
```

```bash
# 経費申請の詳細
freee expense show 88001
```

```
ID:        88001
Title:     出張交通費申請
Amount:    15000
Status:    draft
Date:      2026-04-01
Note:      大阪出張往復
```

```bash
# 経費申請を作成（勘定科目名で指定）
freee expense create \
  --title "出張交通費申請" \
  --date 2026-04-01 \
  --account-name 旅費交通費 \
  --amount 15000 \
  --description "大阪出張往復"

# タイトルを更新
freee expense update 88001 --title "4月大阪出張交通費"

# 経費申請を削除
freee expense delete 88001
```
