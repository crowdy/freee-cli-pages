# journal — 仕訳帳

仕訳帳の一覧取得・ダウンロードを行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 仕訳帳を一覧取得・ダウンロード |

## journal list

```
freee journal list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--download-type` | string | 任意 | ダウンロード形式: `csv` / `pdf`（デフォルト: `csv`） |
| `--from` | string | 任意 | 開始日 (YYYY-MM-DD) |
| `--to` | string | 任意 | 終了日 (YYYY-MM-DD) |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## 使用例

```bash
# 仕訳帳を取得
freee journal list

# 期間を指定して取得
freee journal list --from 2026-01-01 --to 2026-03-31

# JSON形式で出力
freee journal list --format json
```
