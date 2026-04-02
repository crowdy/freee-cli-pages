import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const ja: LocaleSpecificConfig<DefaultTheme.Config> = {
  label: '日本語',
  lang: 'ja',
  description: 'freee公開APIをコマンドラインから操作するCLIツール',

  themeConfig: {
    nav: [
      { text: 'ガイド', link: '/guide/getting-started' },
      { text: 'レシピ', link: '/recipe/monthly-unsettled' },
      { text: 'リファレンス', link: '/reference/auth' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'ガイド',
          items: [
            { text: 'はじめに', link: '/guide/getting-started' },
            { text: 'クイックスタート', link: '/guide/quickstart' },
          ],
        },
      ],
      '/recipe/': [
        {
          text: 'ワークフローレシピ',
          items: [
            { text: '月次未決済リスト', link: '/recipe/monthly-unsettled' },
            { text: '経費一括承認', link: '/recipe/expense-bulk-approve' },
            { text: '月次P&L Slack通知', link: '/recipe/monthly-pl-slack' },
          ],
        },
      ],
      '/reference/': [
        {
          text: '認証・設定',
          items: [
            { text: 'auth', link: '/reference/auth' },
            { text: 'company', link: '/reference/company' },
            { text: 'config', link: '/reference/config' },
          ],
        },
        {
          text: '会計 (Accounting)',
          items: [
            { text: 'deal', link: '/reference/deal' },
            { text: 'invoice', link: '/reference/invoice' },
            { text: 'partner', link: '/reference/partner' },
            { text: 'account', link: '/reference/account' },
            { text: 'section', link: '/reference/section' },
            { text: 'tag', link: '/reference/tag' },
            { text: 'item', link: '/reference/item' },
            { text: 'journal', link: '/reference/journal' },
            { text: 'manual-journal', link: '/reference/manual-journal' },
            { text: 'expense', link: '/reference/expense' },
            { text: 'transfer', link: '/reference/transfer' },
            { text: 'wallet-txn', link: '/reference/wallet-txn' },
            { text: 'walletable', link: '/reference/walletable' },
          ],
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/crowdy/freee-cli-pages/edit/main/docs/:path',
      text: 'このページを編集する',
    },

    lastUpdated: {
      text: '最終更新',
    },

    outline: {
      label: '目次',
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },
  },
}
