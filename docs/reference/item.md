# item — 品目

品目のCRUD操作を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 品目一覧を表示 |
| `create` | 品目を作成 |
| `update <id>` | 品目を更新 |
| `delete <id>` | 品目を削除 |

## item list

```
freee item list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## item create

```
freee item create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--name` | string | **必須** | 品目名 |
| `--shortcut1` | string | 任意 | ショートカット1 |
| `--shortcut2` | string | 任意 | ショートカット2 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## item update

```
freee item update <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--name` | string | 任意 | 品目名 |
| `--shortcut1` | string | 任意 | ショートカット1 |
| `--shortcut2` | string | 任意 | ショートカット2 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## item delete

```
freee item delete <id>
```

## 使用例

```bash
# 品目一覧
freee item list
```

```
ID   NAME          AVAILABLE
201  コンサルティング  true
202  システム開発      true
203  保守サポート      true
```

```bash
# 品目を作成
freee item create --name "クラウド移行支援" --shortcut1 CLOUD

# 品目名を更新
freee item update 201 --name "ITコンサルティング"

# 品目を削除
freee item delete 201
```
