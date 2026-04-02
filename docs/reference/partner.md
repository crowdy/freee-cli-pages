# partner — 取引先

取引先のCRUD操作を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 取引先一覧を表示 |
| `show <id>` | 取引先の詳細を表示 |
| `create` | 取引先を作成 |
| `update <id>` | 取引先を更新 |
| `delete <id>` | 取引先を削除 |

## partner list

```
freee partner list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## partner show

```
freee partner show <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## partner create

```
freee partner create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--name` | string | **必須** | 取引先名 |
| `--code` | string | 任意 | 取引先コード |
| `--long-name` | string | 任意 | 正式名称 |
| `--shortcut1` | string | 任意 | ショートカット1（カナ） |
| `--shortcut2` | string | 任意 | ショートカット2 |
| `--country-code` | string | 任意 | 国コード（デフォルト: `JP`） |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## partner update

```
freee partner update <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--name` | string | 任意 | 取引先名 |
| `--code` | string | 任意 | 取引先コード |
| `--long-name` | string | 任意 | 正式名称 |
| `--shortcut1` | string | 任意 | ショートカット1（カナ） |
| `--shortcut2` | string | 任意 | ショートカット2 |
| `--country-code` | string | 任意 | 国コード |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## partner delete

```
freee partner delete <id> [--dry-run]
```

## 使用例

```bash
# 取引先一覧
freee partner list
```

```
ID     NAME          CODE
10001  株式会社ABC   ABC
10002  株式会社XYZ   XYZ
```

```bash
# 取引先の詳細
freee partner show 10001
```

```
ID:        10001
Name:      株式会社ABC
Code:      ABC
Long Name: 株式会社エービーシー
Shortcut1: エービーシー
Country:   JP
Available: true
Updated:   2026-04-01
```

```bash
# 取引先を作成
freee partner create \
  --name 株式会社DEF \
  --code DEF \
  --shortcut1 デーイーエフ

# 取引先名を更新
freee partner update 10001 --name "ABC株式会社"

# 取引先を削除
freee partner delete 10001
```
