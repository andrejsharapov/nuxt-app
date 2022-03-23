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
        .d-flex.gap-6.mb-6
          .d-flex.align-center
            v-sheet.mr-4.pa-2.rounded(
              style='background: linear-gradient(225deg, #5b62e0, #5731a1)'
            )
            | {{ $t("pages.des-site.title") }}
          .d-flex.align-center
            v-sheet.mr-4.pa-2.rounded(
              style='background: linear-gradient(45deg, var(--orange), var(--pink))'
            )
            | {{ $t("pages.dev-site.title") }}

      v-col.d-none.d-sm-block.mt-sm-n15.text-center(
        cols='12',
        sm='4',
        style='z-index: 2'
      )
        .mt-sm-n15
          s-fish-pages-cases.mt-md-n15(width='270', :height='null')

    s-pages-cases-index-card(:items='localeItems')
</template>

<script>
import { cases } from '~/lib/page-meta'

export default {
  name: 'CasesIndex',
  async asyncData({ $content, app, params }) {
    const cardsLocale = await $content(
      `${app.i18n.locale}/cases/index`,
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
      const a = this.cardsLocale
        ? this.cardsLocale?.data.map((el) => el.list)
        : []

      // делаем из многомерного массива одномерные
      const b = [].concat(a[0], a[1]) // .map((el) => el.title)

      // делаем рандом
      function makeRandomArr() {
        return Math.random() - 0.5
      }

      return b.sort(makeRandomArr)
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
