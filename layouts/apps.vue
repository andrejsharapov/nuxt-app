<script>
export default {
  name: 'LayoutApps',
  data: () => ({
    navbarBottom: {},
  }),
  async fetch() {
    this.navbarBottom = await this.$content(
      `${this.$i18n.locale}/navbar/bottom`
    ).fetch()
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('app.meta.title'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('app.meta.description'),
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('app.meta.title'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('app.meta.description'),
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: this.$i18n.t('author.name'),
        },

        ...i18nSeo.meta,
      ],
    }
  },
}
</script>

<template lang="pug">
v-app
  //- SECTION[epic=layout] NAVIGATION
  s-layout-navbar-bottom(
    v-if='$vuetify.breakpoint.smAndDown',
    :navbar='navbarBottom'
  )
  //- /SECTION

  //- SECTION[epic=layout] MAIN
  v-main
    nuxt
  //- /SECTION
</template>
