# 経費一括承認

承認待ちの経費申請を一括で承認するワークフローです。

## コマンド

```bash
freee expense list --status pending --format json | \
  jq -r '.[].id' | \
  xargs -I{} freee expense action {} --action approve
```

## 確認してから承認

まず一覧を確認してから承認します。

```bash
# 1. 一覧を確認
freee expense list --status pending

# 2. 個別に確認
freee expense show 12345

# 3. 承認
freee expense action 12345 --action approve
```

## 特定の金額以下を自動承認

```bash
freee expense list --status pending --format json | \
  jq -r '.[] | select(.total_amount <= 10000) | .id' | \
  xargs -I{} freee expense action {} --action approve
```
