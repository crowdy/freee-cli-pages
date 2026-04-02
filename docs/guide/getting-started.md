# はじめに

freee CLIは、[freee公開API](https://developer.freee.co.jp)をターミナルから操作するためのコマンドラインツールです。

## 特徴

- シングルバイナリ（Go製、依存ゼロ）
- OAuth2 PKCE認証（ブラウザベース、安全）
- マルチプロファイル対応（複数アカウント・事業所の切り替え）
- 5種のfreee API対応（会計・HR・請求書・工数管理・販売）
- Agent-Friendly（JSON出力、明確なexit code、stderr/stdout分離）

## インストール

### macOS / Linux (Homebrew)

```bash
brew install planitaicojp/tap/freee
```

### Go install

```bash
go install github.com/planitaicojp/freee-cli@latest
```

### バイナリ直接ダウンロード

[GitHub Releases](https://github.com/planitaicojp/freee-cli/releases) からお使いのOS・アーキテクチャに合ったバイナリをダウンロードしてください。

```bash
# 例: Linux amd64
VERSION=$(curl -s https://api.github.com/repos/planitaicojp/freee-cli/releases/latest | grep tag_name | cut -d '"' -f4)
curl -fsSL "https://github.com/planitaicojp/freee-cli/releases/download/${VERSION}/freee_linux_amd64.tar.gz" | tar xz
sudo mv freee /usr/local/bin/
```

## インストール確認

```bash
freee version
```

バージョン番号が表示されればOKです。

## freeeアプリの準備

freee CLIを使うには、freee Developer Portalでアプリを作成する必要があります。

1. [freee Developer Portal](https://app.secure.freee.co.jp/developers) にアクセス
2. 「アプリを作成」をクリック
3. コールバックURLに `http://localhost:8080/callback` を設定
4. Client IDとClient Secretを控えておく

::: tip
アプリはdraft状態のままで使用できます。activeにする必要はありません。
:::

## ログイン

```bash
freee auth login
```

対話形式でClient IDとClient Secretを入力すると、ブラウザが開きます。freeeアカウントでログインし、アプリを承認してください。

```
$ freee auth login
Client ID: your-client-id
Client Secret: ****
Opening browser for authentication...
✓ Logged in as default (company: サンプル株式会社)
```

::: tip
`--profile` オプションで複数のアカウントを管理できます。

```bash
freee auth login --profile company-a
freee auth login --profile company-b
freee auth switch company-a
```
:::

## ログイン確認

```bash
freee auth status
```

トークンの有効期限とプロファイル情報が表示されます。

## 基本的な使い方

```bash
# 事業所一覧
freee company list

# 取引一覧
freee deal list

# JSON形式で出力
freee deal list --format json

# ヘルプを見る
freee --help
freee deal --help
freee deal create --help
```

## 出力フォーマット

すべてのコマンドで `--format` オプションが使えます。

| フォーマット | 説明 |
|-------------|------|
| `table` | テーブル形式（デフォルト） |
| `json` | JSON形式 |
| `yaml` | YAML形式 |
| `csv` | CSV形式 |

## 次のステップ

- [クイックスタート](/guide/quickstart) — ログインから取引作成までの一連の流れ
- [レシピ](/recipe/monthly-unsettled) — 実務で使えるワークフロー例
- [コマンドリファレンス](/reference/auth) — 全コマンドの詳細
