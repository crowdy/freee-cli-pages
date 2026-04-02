# company — 事業所

事業所の一覧表示・詳細確認・デフォルト切り替えを行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 事業所一覧を表示 |
| `show [id]` | 事業所の詳細を表示 |
| `switch <id>` | デフォルト事業所を切り替え |

## company list

```
freee company list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## company show

```
freee company show [id] [flags]
```

引数省略時はアクティブプロファイルのデフォルト事業所を表示します。

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## company switch

```
freee company switch <id> [--profile <name>]
```

## 使用例

```bash
# 事業所一覧
freee company list
```

```
ID       NAME               ROLE
1234567  サンプル株式会社   admin
```

```bash
# 事業所詳細
freee company show 1234567
```

```
ID:          1234567
Name:        サンプル株式会社
Display:     サンプル株式会社
Name Kana:   サンプルカブシキガイシャ
Role:        admin
Zipcode:     100-0001
Address:     東京都千代田区...
Fiscal Year: 2026-01-01 ~ 2026-12-31
```

```bash
# デフォルト事業所を切り替え
freee company switch 7654321

# JSON形式で出力
freee company list --format json
```
