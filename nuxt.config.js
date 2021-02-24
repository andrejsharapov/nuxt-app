import ru from './locales/ru.js'
import en from './locales/en.js'
import { appMeta, appColors } from './config/app'

export default {
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  // loading: '~/components/loading.vue',
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'En' },
      { code: 'ru', iso: 'ru-RU', name: 'Ru' },
    ],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { ru, en },
    },
    seo: true,
    baseUrl: `${appMeta.host.url}`,
  },
  pwa: {
    meta: {
      author: appMeta.app.en.author.name,
      lang: false,
      name: appMeta.app.en.author.name,
      nativeUI: true,
      ogHost: appMeta.host.name,
      ogImage: {
        path: appMeta.host.url + appMeta.app.share,
        width: 1200,
        height: 630,
        type: 'image/jpg',
      },
      theme_color: appColors.default,
      twitterCard: 'summary_large_image',
      twitterSite: appMeta.app.twitter,
    },
    icon: {
      sizes: [32, 64, 76, 120, 144, 152, 167, 180, 192, 384, 512],
    },
    manifest: {
      lang: 'en',
      background_color: appColors.default,
      display: 'standalone',
      icons: [64, 76, 120, 144, 152, 167, 180, 192, 384, 512],
      name: appMeta.app.en.author.name,
      short_name: 'sharapov',
      theme_color: appColors.default,
      useWebmanifestExtension: true,
    },
    workbox: {},
  },
  head: {
    titleTemplate: '%s - nuxt-app',
    title: 'nuxt-app',
    meta: [
      {
        hid: 'title',
        name: 'title',
        property: 'title',
        content: appMeta.app.ru.title,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: appMeta.host.name,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: appMeta.host.url + appMeta.app.share,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: appMeta.app.twitter,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'image_src', href: appMeta.host.url + appMeta.app.share },
      { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
    ],
  },
  axios: {},
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content', 'nuxt-i18n'],
  plugins: [],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    optionsPath: '~/plugins/vuetify-options.js', // frameworkOptions
    theme: {
      dark: false,
    },
  },
  content: {},
  components: true,
  css: [
    { src: '~/assets/stylus/resets', lang: 'styl' },
    { src: '~/assets/css/main' },
  ],
  styleResources: {
    // sass: [],
    scss: ['./assets/sass//utils/*.scss'],
    // less: [],
    // stylus: [],
  },
  build: {
    postcss: {
      plugins: {
        'postcss-custom-media': {},
        'postcss-hexrgba': {},
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-sorting': {},
        'postcss-url': {},
        'postcss-utilities': {},
        precss: {},
      },
      preset: {
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
        },
      },
    },
  },
}
