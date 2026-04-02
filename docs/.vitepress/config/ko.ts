import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const ko: LocaleSpecificConfig<DefaultTheme.Config> = {
  label: '한국어',
  lang: 'ko',
  description: 'freee 공개 API용 CLI 도구 (회계, HR, 청구서)',

  themeConfig: {
    nav: [
      { text: '가이드', link: '/ko/guide/getting-started' },
      { text: '레시피', link: '/ko/recipe/monthly-unsettled' },
      { text: '레퍼런스', link: '/ko/reference/auth' },
    ],

    sidebar: {
      '/ko/guide/': [
        {
          text: '가이드',
          items: [
            { text: '시작하기', link: '/ko/guide/getting-started' },
            { text: '퀵스타트', link: '/ko/guide/quickstart' },
          ],
        },
      ],
      '/ko/recipe/': [
        {
          text: '워크플로우 레시피',
          items: [
            { text: '월간 미결제 리스트', link: '/ko/recipe/monthly-unsettled' },
            { text: '경비 일괄 승인', link: '/ko/recipe/expense-bulk-approve' },
            { text: '월간 P&L Slack 알림', link: '/ko/recipe/monthly-pl-slack' },
          ],
        },
      ],
      '/ko/reference/': [
        {
          text: '인증 / 설정',
          items: [
            { text: 'auth', link: '/ko/reference/auth' },
            { text: 'company', link: '/ko/reference/company' },
            { text: 'config', link: '/ko/reference/config' },
          ],
        },
        {
          text: '회계 (Accounting)',
          items: [
            { text: 'deal', link: '/ko/reference/deal' },
            { text: 'invoice', link: '/ko/reference/invoice' },
            { text: 'partner', link: '/ko/reference/partner' },
            { text: 'account', link: '/ko/reference/account' },
            { text: 'section', link: '/ko/reference/section' },
            { text: 'tag', link: '/ko/reference/tag' },
            { text: 'item', link: '/ko/reference/item' },
            { text: 'journal', link: '/ko/reference/journal' },
            { text: 'manual-journal', link: '/ko/reference/manual-journal' },
            { text: 'expense', link: '/ko/reference/expense' },
            { text: 'transfer', link: '/ko/reference/transfer' },
            { text: 'wallet-txn', link: '/ko/reference/wallet-txn' },
            { text: 'walletable', link: '/ko/reference/walletable' },
          ],
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/crowdy/freee-cli-pages/edit/main/docs/:path',
      text: '이 페이지 편집하기',
    },

    lastUpdated: {
      text: '마지막 업데이트',
    },

    outline: {
      label: '목차',
    },

    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지',
    },
  },
}
