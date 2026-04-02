# section — 部門

部門のCRUD操作を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 部門一覧を表示 |
| `create` | 部門を作成 |
| `update <id>` | 部門を更新 |
| `delete <id>` | 部門を削除 |

## section list

```
freee section list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## section create

```
freee section create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--name` | string | **必須** | 部門名 |
| `--shortcut1` | string | 任意 | ショートカット1 |
| `--shortcut2` | string | 任意 | ショートカット2 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## section update

```
freee section update <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--name` | string | 任意 | 部門名 |
| `--shortcut1` | string | 任意 | ショートカット1 |
| `--shortcut2` | string | 任意 | ショートカット2 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## section delete

```
freee section delete <id>
```

## 使用例

```bash
# 部門一覧
freee section list
```

```
ID   NAME
1    営業部
2    開発部
3    管理部
```

```bash
# 部門を作成
freee section create --name マーケティング部 --shortcut1 MKT

# 部門名を更新
freee section update 1 --name "営業本部"

# 部門を削除
freee section delete 1
```
