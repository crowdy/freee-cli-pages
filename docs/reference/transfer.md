# transfer — 口座振替

口座間の資金移動（口座振替）のCRUD操作を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 口座振替一覧を表示 |
| `show <id>` | 口座振替の詳細を表示 |
| `create` | 口座振替を作成 |
| `update <id>` | 口座振替を更新 |
| `delete <id>` | 口座振替を削除 |

## transfer list

```
freee transfer list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--from` | string | 任意 | 開始日 (YYYY-MM-DD) |
| `--to` | string | 任意 | 終了日 (YYYY-MM-DD) |
| `--limit` | int | 任意 | 1ページあたり最大件数（デフォルト: 20） |
| `--offset` | int | 任意 | ページネーション用オフセット |
| `--all` | bool | 任意 | 全ページを自動取得 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## transfer show

```
freee transfer show <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## transfer create

```
freee transfer create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--date` | string | **必須** | 振替日 (YYYY-MM-DD) |
| `--amount` | int64 | **必須** | 振替金額 |
| `--from-type` | string | **必須** | 振替元口座種別: `bank_account` / `credit_card` / `wallet` |
| `--from-id` | int64 | **必須** | 振替元口座ID |
| `--to-type` | string | **必須** | 振替先口座種別: `bank_account` / `credit_card` / `wallet` |
| `--to-id` | int64 | **必須** | 振替先口座ID |
| `--description` | string | 任意 | 摘要 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## transfer update

```
freee transfer update <id> [flags]
```

GET-then-mergeパターン：指定したフラグのみ更新し、未指定フィールドは現在の値を維持します。

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--date` | string | 任意 | 振替日 (YYYY-MM-DD) |
| `--amount` | int64 | 任意 | 振替金額 |
| `--from-type` | string | 任意 | 振替元口座種別 |
| `--from-id` | int64 | 任意 | 振替元口座ID |
| `--to-type` | string | 任意 | 振替先口座種別 |
| `--to-id` | int64 | 任意 | 振替先口座ID |
| `--description` | string | 任意 | 摘要 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## transfer delete

```
freee transfer delete <id> [--dry-run]
```

## 使用例

```bash
# 口座一覧でIDを確認
freee walletable list
```

```
ID    NAME          TYPE
1001  普通預金      bank_account
1002  法人カード    credit_card
```

```bash
# 口座振替一覧
freee transfer list
```

```
ID    DATE        AMOUNT   FROM                    TO
5001  2026-04-01  500000   bank_account:1001        bank_account:1002
```

```bash
# 口座振替を作成
freee transfer create \
  --date 2026-04-01 \
  --amount 500000 \
  --from-type bank_account \
  --from-id 1001 \
  --to-type bank_account \
  --to-id 1003 \
  --description "本社→支店送金"

# dry-runで確認
freee transfer create \
  --date 2026-04-01 --amount 100000 \
  --from-type bank_account --from-id 1001 \
  --to-type wallet --to-id 2001 \
  --dry-run

# 金額のみ更新（その他フィールドは維持）
freee transfer update 5001 --amount 600000

# 口座振替を削除
freee transfer delete 5001
```
