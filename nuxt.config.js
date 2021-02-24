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
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],
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

  build: {},
}
