import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'freee CLI',
  base: '/freee-cli-pages/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/planitaicojp/freee-cli' },
    ],
    search: {
      provider: 'local',
    },
  },
})
