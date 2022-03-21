<template lang="pug">
v-container.page__email__slug
  s-history-back.mb-4
  v-card-title {{ email.title }}
  v-card-subtitle {{ formatDate(email.created) }}
  v-card-text {{ $t("works.types") }}: {{ email.ux.price }}
  v-row.mb-4
    //- COMPONENT ARROW PREV
    v-col.order-1.order-md-0.d-none.d-sm-flex.justify-start(cols='12', md='1')
      s-pages-cases-components-slug-arrow-prev(
        :prev='prev',
        go-to='cases/design/email'
      )
    //- /COMPONENT

    //- SECTION image
    v-col(cols='12', md='5')
      v-expansion-panels.mt-6.rounded(
        v-model='panel',
        flat,
        :multiple='$vuetify.breakpoint.mdAndUp'
      )
        v-expansion-panel.shadow-sm.pa-0
          v-expansion-panel-header(v-if='$vuetify.breakpoint.smAndDown') {{ $tc("events.show", 1) }} | {{ $tc("events.hide", 1) }}
          v-expansion-panel-content.pa-0
            v-img.mx-auto(
              :alt='email.img.alt',
              max-width='600',
              lazy-src='https://fakeimg.pl/300/e9ecf2/1e1e24?text=IMG',
              :src='email.img.src'
            )
              template(#placeholder)
                v-row.fill-height.ma-0(align='center', justify='center')
                  v-progress-circular(indeterminate, color='grey lighten-5')
    //- /SECTION

    //- SECTION info
    v-col(cols='12', md='5')
      v-timeline(dense)
        v-timeline-item(
          v-for='(s, i) in email.section',
          :key='i',
          small,
          :color='colors[i]'
        )
          span(slot='opposite')
          v-card.shadow-sm
            v-card-title.text-subtitle-1.text-no-wrap.text-lg-h5 {{ s.title }}
            v-divider(inset)
            v-card-text(v-if='Array.isArray(s.caption)')
              ol
                li(v-for='(value, index) in s.caption', :key='index') {{ value }}
            v-card-text(v-else) {{ s.caption }}
    //- /SECTION

    //- COMPONENT ARROW NEXT
    v-col.order-1.order-md-0.d-none.d-sm-flex.justify-end(cols='12', md='1')
      s-pages-cases-components-slug-arrow-next(
        :next='next',
        go-to='cases/design/email'
      )
    //- /COMPONENT

  s-pages-cases-components-slug-components-leave-comments.px-4(
    :comment='email.preview'
  )
</template>

<script>
export default {
  name: 'CasesDesignEmailSlug',
  middleware({ redirect, app }) {
    if (app.i18n.locale === 'en') {
      return redirect('301', `/${app.i18n.locale}/cases`)
    }
  },
  async asyncData({ $content, app, params }) {
    const email = await $content(
      `${app.i18n.locale}/cases/design/email`,
      params.slug
    )
      .where({ type: 'des-email' })
      .fetch()

    const [prev, next] = await $content(`${app.i18n.locale}/cases/design/email`)
      .where({ type: 'des-email' })
      .only(['title', 'slug'])
      .sortBy('created', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      email,
      prev,
      next,
    }
  },
  data: () => ({
    panel: [0],
    colors: ['red', 'red', 'green', 'green', 'blue', 'blue'],
  }),
  head() {
    return {
      title: this.email?.title ? this.email.title : '',
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

<style lang="scss">
.page__email__slug {
  .case-arrow-link {
    &__prev,
    &__next {
      position: fixed;
      z-index: 1;
      top: 49%;
      opacity: 0.4;

      &:hover {
        opacity: 1;
      }
    }
  }

  .v-expansion-panel-content__wrap {
    padding: 0;
  }
}
</style>
