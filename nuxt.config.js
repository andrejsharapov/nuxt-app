import { appMeta, appColors } from './config/app'

export default {
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  // loading: '~/components/loading.vue',
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.js', name: 'Русский' },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix',
    lazy: true,
    langDir: './locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    vueI18n: {
      fallbackLocale: 'ru',
    },
    seo: true,
    baseUrl: `${appMeta.host.url}`,
  },
  pwa: {
    meta: {
      author: appMeta.app.en.author.name,
      lang: 'ru-RU',
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
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    'nuxt-purgecss',
    '@nuxtjs/svg',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/google-fonts',
  ],
  plugins: [
    { src: '~/plugins/locales' },
    { src: '~/plugins/vue-notifications-server', mode: 'server' },
    { src: '~/plugins/vue-notifications-client', mode: 'client' },
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    optionsPath: '~/plugins/vuetify-options.js', // frameworkOptions
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  googleFonts: {
    prefetch: true,
    families: {
      Commissioner: [300, 400, 500, 700, 900],
      Manrope: [400, 500, 700],
      'Montserrat+Alternates': {
        wght: [400, 500, 700, 900],
        ital: [400],
      },
      Raleway: {
        wght: [300, 400, 500, 700, 900],
        ital: [400, 500],
      },
    },
  },
  htmlValidator: {
    usePrettier: true,
    options: {
      rules: {
        'attribute-empty-style': 'off',
        'element-required-attributes': 'off',
        'text-content': 'off',
        'prefer-native-element': 'off',
        'element-permitted-content': 'off',
      },
    },
  },
  css: [
    { src: '~/assets/css/app' },
    { src: '~/assets/stylus/resets', lang: 'styl' },
    { src: '~/assets/sass/theme/dark', lang: 'scss' },
  ],
  styleResources: {
    css: '~/assets/css/utils/*.css',
    sass: [],
    scss: '~/assets/sass/utils/*.scss',
    // less: [],
    // stylus: [],
  },
  // purgeCSS: {
  //   paths: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'node_modules/@nuxtjs/vuetify/**/*.ts',
  //     'node_modules/@nuxt/vue-app/template/**/*.html',
  //     'node_modules/@nuxt/vue-app/template/**/*.vue',
  //   ],
  //   extractors: [
  //     {
  //       extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
  //       extensions: ['html', 'vue', 'js'],
  //     },
  //   ],
  //   styleExtensions: ['.css'],
  //   whitelist: ['v-application', 'v-application--wrap'],
  //   whitelistPatterns: [
  //     /^v-((?!application).)*$/,
  //     /^\.theme--dark*/,
  //     /.*-transition/,
  //   ],
  //   whitelistPatternsChildren: [
  //     /^v-((?!application).)*$/,
  //     /^theme--dark.*/,
  //     /.*-transition/,
  //   ],
  // },
  content: {},
  components: [
    '~/components',
    { path: '~/components/layouts/', prefix: 'layout' },
  ],
  build: {
    // analyze: true,
    devtools: true,
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) { }
    // },
    extractCSS: true,
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
        // '@fullhuman/postcss-purgecss': {
        //   content: [
        //     'components/**/*.vue',
        //     'layouts/**/*.vue',
        //     'pages/**/*.vue',
        //     'plugins/**/*.js',
        //     'node_modules/vuetify/src/**/*.ts',
        //   ],
        //   styleExtensions: ['.css'],
        //   safelist: {
        //     standard: ['body', 'html', 'nuxt-progress'],
        //     deep: [
        //       /page-enter/,
        //       /page-leave/,
        //       /dialog-transition/,
        //       /tab-transition/,
        //       /tab-reversetransition/,
        //     ],
        //   },
        // },
        // 'css-byebye': {
        //   rulesToRemove: [/.*\.v-application--is-rtl.*/, /.*\.theme--dark.*/],
        // },
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
