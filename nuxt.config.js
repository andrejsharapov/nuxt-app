export default {
  head: {
    titleTemplate: '%s - nuxt-app',
    title: 'nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
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
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  content: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
    },
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
