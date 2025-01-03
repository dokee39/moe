import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://dokee.moe/',
  base: '/',
  title: 'dokee',
  description:
    'RMer',
  author: 'dokee',
  lang: 'zh',
  ogLocale: 'zh_CN',
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/wiki',
      title: 'Wiki',
      displayMode: 'alwaysText',
      text: 'Wiki',
    },
    {
      path: '/blog',
      title: 'Blog',
      displayMode: 'alwaysText',
      text: 'Blog',
    },
    {
      path: '/projects',
      title: 'Projects',
      displayMode: 'alwaysText',
      text: 'Projects',
    },
    {
      path: '/activity',
      title: 'Activity',
      displayMode: 'alwaysIcon',
      icon: 'i-eva-activity-fill',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/dokee39',
      title: 'Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    {
      link: 'https://space.bilibili.com/355620078/',
      title: 'bilibili',
      displayMode: 'alwaysIcon',
      icon: 'i-mingcute-bilibili-line',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'socialLinks',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Recent', path: '/wiki' },
    { title: 'Software', path: '/wiki/software' },
    { title: 'Hardware', path: '/wiki/hardware' },
  ],
  groupView: {
    maxGroupColumns: 2,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      //'withastro/astro',
      //'withastro/starlight',
      //'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      //[/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      //[/theme/, 'i-unjs-theme-colors'],
      //[/github/, 'https://www.svgrepo.com/show/475654/github-color.svg'],
      //[/tweet/, 'i-logos-twitter'],
      //[/bluesky/, 'i-logos-bluesky'],
    ],
  },
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  share: [
    false,
    {
      twitter: [true, '@dokee_39'],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'hover',
    },
  ],
  ogImage: [
    false,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  slideEnterAnim: [true, { enterStep: 60 }],
}
