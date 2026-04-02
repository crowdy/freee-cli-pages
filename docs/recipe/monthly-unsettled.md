# 月次未決済リスト

毎月の未決済取引をCSVで出力し、経理担当者に共有するワークフローです。

## コマンド

```bash
freee deal list --status unsettled --format csv > unsettled-$(date +%Y%m).csv
```

## 全件取得する場合

```bash
freee deal list --status unsettled --all --format csv > unsettled-$(date +%Y%m).csv
```

## 金額合計をJSON + jqで計算

```bash
freee deal list --status unsettled --all --format json | \
  jq '[.[].amount] | add'
```

## CI/CDでの自動化

GitHub Actionsなどで月次実行する場合は、`FREEE_TOKEN` 環境変数で認証できます。

```yaml
- name: Export unsettled deals
  env:
    FREEE_TOKEN: ${{ secrets.FREEE_TOKEN }}
    FREEE_COMPANY_ID: ${{ secrets.FREEE_COMPANY_ID }}
  run: |
    freee deal list --status unsettled --all --format csv > unsettled.csv
```
