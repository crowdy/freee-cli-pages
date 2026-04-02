# auth — 認証

OAuth2認証とプロファイルを管理します。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `login` | OAuth2ブラウザフローでログイン |
| `logout` | アクティブプロファイルのトークン・認証情報を削除 |
| `status` | 現在の認証状態を表示 |
| `list` | 設定済みプロファイル一覧を表示 |
| `switch <profile>` | アクティブプロファイルを切り替え |
| `token` | アクセストークンを標準出力に表示（スクリプト用） |
| `remove <profile>` | プロファイルを完全に削除 |

## auth login

```
freee auth login [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--client-id` | string | 任意 | OAuth2 クライアントID |
| `--client-secret` | string | 任意 | OAuth2 クライアントシークレット |
| `--profile` | string | 任意 | 対象プロファイル名（デフォルト: active profile） |

フラグ未指定の場合は対話形式で入力を求めます。

## auth logout

```
freee auth logout [--profile <name>]
```

## auth status

```
freee auth status [--profile <name>]
```

## auth list

```
freee auth list
```

## auth switch

```
freee auth switch <profile>
```

## auth token

```
freee auth token [--profile <name>]
```

トークンを標準出力に出力します（末尾改行なし）。

## auth remove

```
freee auth remove <profile>
```

## 使用例

```bash
# 初回ログイン（対話形式）
freee auth login

# Client IDを直接指定してログイン
freee auth login --client-id abc123 --client-secret secret

# 複数プロファイルを使い分ける
freee auth login --profile company-a
freee auth login --profile company-b
freee auth switch company-a

# 認証状態の確認
freee auth status
```

```
Profile:   default
Email:     user@example.com
Company:   サンプル株式会社 (ID: 1234567)
Token:     valid (expires in 23h59m, 2026-04-03 12:00 JST)
```

```bash
# プロファイル一覧
freee auth list
```

```
* default    user@example.com    サンプル株式会社    authenticated
  company-b  other@example.com   別会社              expired (refreshable)
```

```bash
# スクリプトでトークンを使用
TOKEN=$(freee auth token)
curl -H "Authorization: Bearer $TOKEN" https://api.freee.co.jp/api/1/companies
```
