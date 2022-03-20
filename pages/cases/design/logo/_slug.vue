<template lang="pug">
v-card(flat, tile)
  s-history-back
  //- SECTION 1: preview
  v-sheet(color='transparent')
    v-img.fill-width(
      :src='`/src/nuxt-app/logo/${logo.slug}/cover.jpg`',
      contain,
      :alt='logo.title'
    )
  //- /SECTION

  //- SECTION 2: logos
  section.position-relative.z-index-2
    v-banner.pr-lg-4(
      single-line,
      :color='$vuetify.theme.dark ? "var(--card)" : "white"'
    )
      v-card(tile, flat, color='transparent')
        .d-flex.flex-column.flex-md-row.align-md-end.justify-md-space-between
          v-card-title.pa-0.text-h5.font-weight-bold {{ logo.title }}
          .text-md-right
            v-card-subtitle.pa-0 {{ formatDate(logo.created) }}
            v-card-subtitle.pa-0 {{ logo.ux.price }}
        v-card-text.px-0.text-body-2.text-md-body-1(v-if='logo.about') {{ logo.about }}

    .d-grid.grid-cols-sm-2.gap-6
      v-sheet(v-for='(name, index) of logo.colors', :key='index')
        v-img(
          :src='`/src/nuxt-app/logo/${logo.slug}/colors/${name}.jpg`',
          aspect-ratio='1'
        )
  //- /SECTION

  //- SECTION 3: details
  template(v-if='logo.section')
    section(v-for='(s, index) in logo.section')
      v-banner.pr-lg-4(
        :key='index',
        single-line,
        :color='$vuetify.theme.dark ? "var(--card)" : "white"'
      )
        v-card(tile, flat, color='transparent')
          v-card-title.px-0.text-subtitle-1.text-md-h5.font-weight-medium(
            v-if='s.title'
          ) {{ s.title }}
          v-card-text.px-0.text-body-2.text-md-body-1(v-if='s.caption') {{ s.caption }}
      v-img(:src='`/src/nuxt-app/logo/${logo.slug}/section/${index + 1}.jpg`')

  v-toolbar.z-index-2(dense, flat, color='transparent')
    v-toolbar-title(v-if='$vuetify.breakpoint.mdAndUp') {{ $t("thx.view") }}!
    v-spacer

    v-btn.mt-n12(
      absolute,
      dark,
      fab,
      to='../',
      color='grey darken-3',
      style='left: calc(50% - 28px)'
    )
      v-icon {{ mdiClose }}

  s-pages-cases-components-slug-components-leave-comments.px-4(
    :comment='logo.preview'
  )
</template>

<script>
import { mdiClose } from '@mdi/js'

export default {
  name: 'CasesDesignLogoSlug',
  async asyncData({ $content, app, params }) {
    const logo = await $content(
      `${app.i18n.locale}/cases/design/logo`,
      params.slug
    )
      .where({ type: 'des-logo' })
      .fetch()

    return {
      logo,
    }
  },
  data: () => ({
    mdiClose,
  }),
  head() {
    return {
      title: this.logo?.title ? this.logo.title : '',
      titleTemplate: `%s · ${this.$t('pages.cases.title')} · ${this.$t(
        'author.name'
      )}`,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>
