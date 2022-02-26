<template lang="pug">
.page__des-apps
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-flies-stars
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiCellphoneCog',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='8')
        p(v-html="$t('pages.des-apps.message', { link: \"<a href='https://www.instagram.com/p/B4MrgTIg5p2/' target='_blank' rel='noopener noreferrer' title='New Year application'>New Year</a>\" })")

      v-col.d-none.d-sm-block.mt-sm-n15.text-center(
        cols='12',
        sm='4',
        style='z-index: 2'
      )
        .mt-sm-n12
          s-fish-pages-des-apps(:width='350')

      //- COMPONENT CHART
      v-col(cols="12", md="7")
        v-card.mb-4.pa-4.shadow-xl
          v-lazy(
            :options="{ threshold: 0.5}",
            transition="slide-y-reverse-transition"
          )
            s-chart-apex(:counters="chart")
      // /COMPONENT
      v-col(cols='12', md="5")

      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')

        v-row(v-if='localeItems.length')
          v-col(
            v-for='app of localeItems',
            :key='app.slug',
            cols='12'
          )
            s-pages-cases-components-card-row(:site='app', :show-tools='1')
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiCellphoneCog } from '@mdi/js'
import { desApps } from '~/lib/page-meta'

export default {
  name: 'CasesDesignAppsIndex',
  async asyncData({ $content, app, params }) {
    const desAppsLocale = await $content(
      `${app.i18n.locale}/cases/design/apps`,
      params.slug
    )
      .where({ type: 'des-apps', hide: false })
      .sortBy('created', 'desc')
      .fetch()

    const chart = await $content(
      `${app.i18n.locale}/cases/design/apps/des-app-options`
    )
      .only(['chartOptions', 'chartSeries'])
      .fetch()

    return {
      desAppsLocale,
      chart,
    }
  },
  data() {
    return {
      page: desApps(this),
      mdiCellphoneCog,
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
      return this.desAppsLocale ? this.desAppsLocale : []
    },
  },
}
</script>

<style lang="scss">
.page {
  &__des-apps {
    --stop-color-one: var(--v-info-lighten1);
    --stop-color-two: var(--info);
  }
}
</style>
