# walletable — 口座

登録済み口座（銀行口座・クレジットカード・現金・ウォレット）の一覧表示・詳細確認を行います。

## サブコマンド

| サブコマンド | 説明 |
|------------|------|
| `list` | 口座一覧を表示 |
| `show <type> <id>` | 口座の詳細を表示 |

## walletable list

```
freee walletable list [flags]
```

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |
| `--no-header` | bool | 任意 | ヘッダー行を非表示 |

## walletable show

```
freee walletable show <type> <id> [flags]
```

`<type>` には `bank_account` / `credit_card` / `wallet` のいずれかを指定します。

### フラグ

| フラグ | 型 | 必須 | 説明 |
|-------|----|------|------|
| `--format` | string | 任意 | 出力形式: `table` / `json` / `yaml` / `csv` |

## 使用例

```bash
# 口座一覧
freee walletable list
```

```
ID    NAME              TYPE
1001  普通預金（三井住友）  bank_account
1002  法人クレジットカード  credit_card
1003  現金               wallet
```

```bash
# 口座の詳細
freee walletable show bank_account 1001
```

```
ID:       1001
Name:     普通預金（三井住友）
Type:     bank_account
Balance:  1500000
Updated:  2026-04-01
```

```bash
# JSON形式で出力
freee walletable list --format json

# 口座IDの確認（transfer/wallet-txn コマンドで使用）
freee walletable list --no-header --format csv
```

::: tip
`transfer create` や `wallet-txn list` で使用する口座IDは、このコマンドで確認できます。
:::
