---
layout: home
hero:
  name: freee CLI
  text: freee公開APIをコマンドラインから操作
  tagline: 会計・HR・請求書、すべてターミナルから
  actions:
    - theme: brand
      text: はじめに
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/planitaicojp/freee-cli
features:
  - title: かんたんインストール
    details: Go製のシングルバイナリ。Homebrew、go install、バイナリ直接ダウンロードに対応。
  - title: Agent-Friendly
    details: JSON出力、明確なexit code、stderr/stdout分離。AIエージェントやCI/CDとの統合に最適。
  - title: 5種のAPI対応
    details: 会計(Accounting)・HR・請求書(Invoice)・工数管理(PM)・販売(Sales)の全API。
---

## 5ステップで会計データ取得

### 1. インストール

```bash
brew install planitaicojp/tap/freee
```

### 2. ログイン（ブラウザが開きます）

```bash
freee auth login
```
```
✓ Logged in as default (company: サンプル株式会社)
```

### 3. 事業所を確認

```bash
freee company list
```
```
ID       NAME               DISPLAY_NAME
1234567  サンプル株式会社     サンプル株式会社
```

### 4. 今月の取引一覧

```bash
freee deal list
```
```
ID        DATE        TYPE     AMOUNT   PARTNER          STATUS
12345678  2026-04-01  expense  50000    株式会社ABC       settled
12345679  2026-04-01  income   120000   株式会社XYZ       unsettled
```

### 5. JSONで取得してパイプ処理

```bash
freee deal list --format json | jq '[.[].amount] | add'
```
```
170000
```

::: tip 詳しくは
[クイックスタート](/guide/quickstart) で実際の出力を見ながら試せます。
:::
