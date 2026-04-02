# config — 設定

CLIの設定を表示・変更します。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `show` | 現在の設定を表示 |
| `set <key> <value>` | 設定値を変更 |
| `path` | 設定ディレクトリのパスを表示 |

## config show

```
freee config show [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## config set

```
freee config set <key> <value>
```

### 設定キー

| キー | 説明 |
|-----|------|
| `format` | デフォルト出力形式（`table` / `json` / `yaml` / `csv`） |

## config path

```
freee config path
```

## 使用例

```bash
# 現在の設定を確認
freee config show
```

```bash
# デフォルト出力形式をJSONに変更
freee config set format json
```

```
Set format = json
```

```bash
# 設定ファイルのディレクトリを確認
freee config path
```

```
/home/user/.config/freee
```

設定ファイルは以下の3ファイルで構成されます：

| ファイル | 内容 |
|---------|------|
| `config.yaml` | プロファイル、デフォルト値 |
| `credentials.yaml` | OAuth トークン |
| `tokens.yaml` | トークンキャッシュ |
