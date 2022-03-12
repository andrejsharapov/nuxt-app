<template lang="pug">
.page__illustration
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
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiVectorCurve',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='8')
        p(v-html="$t('pages.illustrations.message', { link: \"<a href='https://www.pinterest.ru/andrejsharapov/cute-fishes-madeas-fiska/' target='_blank' rel='noopener noreferrer' title='Cute fishes: Madeas & Fiska'>Madeas & Fiska</a>\" })")

      v-col.d-none.d-sm-block.mt-sm-n15.text-center(
        cols='12',
        sm='4',
        style='z-index: 2'
      )
        .mt-sm-n12
          s-fish-pages-illustrations(height='200', :width='null')

      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')

        v-row(v-if='localeItems.length')
          v-col(
            v-for='(item, index) in localeItems',
            :key='index',
            :md='item.grid'
          )
            s-pages-cases-design-illustrations-illustration-card(
              :item='item',
              :preview='cardView'
            )
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiVectorCurve } from '@mdi/js'
import { illustrations } from '~/lib/page-meta'

export default {
  name: 'CasesDesignIllustrationsIndex',
  async asyncData({ $content, params }) {
    const illustrationsLocale = await $content('illustrations', params.slug)
      .sortBy('date', 'desc')
      .fetch()

    // const skills = await $content('skills/').only('data').fetch()

    return {
      illustrationsLocale,
      // skills,
    }
  },
  data() {
    return {
      page: illustrations(this),
      mdiVectorCurve,
      cardView: true,
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
      return this.illustrationsLocale ? this.illustrationsLocale : []
    },
  },
}
</script>

<style lang="scss">
.page {
  &__illustration {
    --stop-color-one: #0d2880;
    --stop-color-two: var(--success);
  }
}
</style>
