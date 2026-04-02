# 月次P&L Slack通知

月次の損益計算書(P&L)をSlackに通知するワークフローです。

::: warning
`freee report` コマンドはPhase 3で実装予定です。現時点ではAPIを直接呼び出す例を示します。
:::

## 構想

```bash
# Phase 3実装後のイメージ
freee report pl --format json | jq '.net_income' | \
  curl -s -X POST $SLACK_WEBHOOK \
    -d "{\"text\":\"今月の純利益: $(cat -)円\"}"
```

## 現時点でできること

取引の集計でP&Lの概算を出すことは可能です。

```bash
# 今月の収入合計
freee deal list --type income --all --format json | \
  jq '[.[].amount] | add'

# 今月の支出合計
freee deal list --type expense --all --format json | \
  jq '[.[].amount] | add'
```
