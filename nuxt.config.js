import theme from '@jsilva-pt/nuxt-content-theme-blog'
import { footerLinks } from './blog.settings'

const baseUrl = 'https://dorgeln.org'

const publicRuntimeConfig = {
  baseUrl: 'https://dorgeln.org',

  logoLight: '/logo-light.svg',
  logoDark: '/logo-dark.svg',

  githubOwner: 'atrawog',
  githubRepository: 'dorgeln.org',
  githubMainBranch: 'master',

  footerLinks,
}

export default theme({
  feedOptions: {
    title: 'Dorgeln',
    description: '',
    link: baseUrl,
  },
  publicRuntimeConfig,
  pwa: {
    manifest: {
      short_name: 'Dorgeln',
    },
    meta: {
      author: 'Andreas Trawoeger',
      theme_color: '#2C3E50',
      ogHost: baseUrl,
      twitterCard: 'summary_large_image',
      twitterSite: publicRuntimeConfig.twitterUsername,
      twitterCreator: publicRuntimeConfig.twitterUsername,
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./i18n/en-US'),
      },
    },
  },
})
