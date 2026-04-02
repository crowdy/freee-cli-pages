import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const en: LocaleSpecificConfig<DefaultTheme.Config> = {
  label: 'English',
  lang: 'en',
  description: 'CLI tool for freee public API (Accounting, HR, Invoice)',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/en/guide/getting-started' },
      { text: 'Recipes', link: '/en/recipe/monthly-unsettled' },
      { text: 'Reference', link: '/en/reference/auth' },
    ],

    sidebar: {
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/en/guide/getting-started' },
            { text: 'Quickstart', link: '/en/guide/quickstart' },
          ],
        },
      ],
      '/en/recipe/': [
        {
          text: 'Workflow Recipes',
          items: [
            { text: 'Monthly Unsettled List', link: '/en/recipe/monthly-unsettled' },
            { text: 'Bulk Expense Approval', link: '/en/recipe/expense-bulk-approve' },
            { text: 'Monthly P&L to Slack', link: '/en/recipe/monthly-pl-slack' },
          ],
        },
      ],
      '/en/reference/': [
        {
          text: 'Auth & Config',
          items: [
            { text: 'auth', link: '/en/reference/auth' },
            { text: 'company', link: '/en/reference/company' },
            { text: 'config', link: '/en/reference/config' },
          ],
        },
        {
          text: 'Accounting',
          items: [
            { text: 'deal', link: '/en/reference/deal' },
            { text: 'invoice', link: '/en/reference/invoice' },
            { text: 'partner', link: '/en/reference/partner' },
            { text: 'account', link: '/en/reference/account' },
            { text: 'section', link: '/en/reference/section' },
            { text: 'tag', link: '/en/reference/tag' },
            { text: 'item', link: '/en/reference/item' },
            { text: 'journal', link: '/en/reference/journal' },
            { text: 'manual-journal', link: '/en/reference/manual-journal' },
            { text: 'expense', link: '/en/reference/expense' },
            { text: 'transfer', link: '/en/reference/transfer' },
            { text: 'wallet-txn', link: '/en/reference/wallet-txn' },
            { text: 'walletable', link: '/en/reference/walletable' },
          ],
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/crowdy/freee-cli-pages/edit/main/docs/:path',
      text: 'Edit this page',
    },
  },
}
