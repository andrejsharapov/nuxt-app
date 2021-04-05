<template lang="pug">
.page__cases
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line(
        absolute,
        right='0',
        bottom='-7',
        left='0',
        :width='null',
        :height='null'
      )

  v-container
    v-row
      v-col(cols='12', sm='8')
        v-card-title.px-0.text-break-word {{ $tc("pages.cases.message", 1) }}
        v-card-subtitle.px-0 {{ $tc("pages.cases.message", 2) }}

      v-col.d-none.d-sm-block.mt-sm-n15.text-center(
        cols='12',
        sm='4',
        style='z-index: 2'
      )
        .mt-sm-n15
          s-fish-pages-cases.mt-md-n15(width='270', :height='null')

    s-page-cases-index-card(:items='localeItems')
</template>

<script>
import { cases } from '~/lib/page-meta'

export default {
  async asyncData({ $content, app, params }) {
    const cardsLocale = await $content(
      `${app.i18n.locale}/pages/cases/index`,
      params.slug
    ).fetch()

    return {
      cardsLocale,
    }
  },
  data() {
    return {
      page: cases(this),
    }
  },
  head() {
    return {
      title: this.page.title,
      titleTemplate: `%s · ${this.$t('author.name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
  computed: {
    localeItems() {
      return this.cardsLocale ? this.cardsLocale?.data : []
    },
  },
}
</script>

<style lang="sass">
.page__cases
  --stop-color-one: #5731a1
  --stop-color-two: #e24275
  --size: 4rem

  &__card
    transition: all 200ms linear

    .v-icon__svg
      width: var(--size)
      height: var(--size)
      transition: inherit

    &:hover
      .v-icon__svg
        --size: 2rem
</style>
