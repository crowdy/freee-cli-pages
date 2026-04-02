# tag — メモタグ

メモタグのCRUD操作を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | メモタグ一覧を表示 |
| `create` | メモタグを作成 |
| `update <id>` | メモタグを更新 |
| `delete <id>` | メモタグを削除 |

## tag list

```
freee tag list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## tag create

```
freee tag create [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--name` | string | **必須** | タグ名 |
| `--shortcut1` | string | 任意 | ショートカット1 |
| `--shortcut2` | string | 任意 | ショートカット2 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## tag update

```
freee tag update <id> [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--name` | string | 任意 | タグ名 |
| `--shortcut1` | string | 任意 | ショートカット1 |
| `--shortcut2` | string | 任意 | ショートカット2 |
| `--dry-run` | bool | 任意 | APIを呼ばずにリクエスト内容を確認 |

## tag delete

```
freee tag delete <id>
```

## 使用例

```bash
# メモタグ一覧
freee tag list
```

```
ID  NAME
1   交通費精算
2   会議費
3   備品購入
```

```bash
# メモタグを作成
freee tag create --name "出張費" --shortcut1 SHUTCHO

# メモタグ名を更新
freee tag update 1 --name "交通費"

# メモタグを削除
freee tag delete 1
```
