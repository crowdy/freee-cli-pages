# account — 勘定科目

勘定科目の一覧表示・詳細確認を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 勘定科目一覧を表示 |
| `show <id>` | 勘定科目の詳細を表示 |

## account list

```
freee account list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## account show

```
freee account show <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## 使用例

```bash
# 勘定科目一覧
freee account list
```

```
ID   NAME       CATEGORY    TAX_CODE  SHORTCUT
100  売上高     income      1         URI
110  受取利息   income      0
200  仕入高     expense     1         SII
210  旅費交通費 expense     1         RYO
```

```bash
# 勘定科目の詳細
freee account show 210
```

```
ID:        210
Name:      旅費交通費
Category:  expense
Group:     販売費及び一般管理費
Tax Code:  1
Shortcut:  RYO
Available: true
```

```bash
# JSON形式で全勘定科目を取得
freee account list --format json

# CSVで出力
freee account list --format csv
```

::: tip
`--account-name` フラグ（`deal create` など）で名前からIDを自動解決できます。
`freee account list` でIDを事前に確認する必要はありません。
:::
