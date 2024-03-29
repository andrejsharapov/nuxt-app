<template lang="pug">
.page__des-logo
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line-four(
        absolute,
        right='0',
        bottom='-7',
        left='0',
        :width='null',
        :height='null'
      )
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='logoFiltered',
        :icon='mdiVectorRadius',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='8')
        s-skill-slider(:items='skills.list')
      v-col.d-none.d-sm-block.mt-sm-n15.text-center(
        cols='12',
        sm='4',
        style='z-index: 2'
      )
        .mt-sm-n12
          s-fish-pages-logotypes(width='300', :height='null')

      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')
        p {{ $t("pages.logos.message") }}

        .d-grid.grid-cols-sm-2.grid-cols-md-3.gap-6(v-if='localeItems.length')
          div(v-for='(item, index) in localeItems', :key='index')
            v-lazy(
              :options='{ threshold: 0.5 }',
              transition='scroll-y-reverse-transition'
            )
              s-pages-cases-design-logo-card-logos(
                :item='item',
                :preview='cardView'
              )
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiVectorRadius } from '@mdi/js'
import { logos } from '~/lib/page-meta'

export default {
  name: 'CasesDesignLogoIndex',
  async asyncData({ $content, app, params }) {
    const logosLocale = await $content(
      `${app.i18n.locale}/cases/design/logo`,
      params.slug
    ).fetch()

    const skills = await $content('skills/logos').only('list').fetch()

    return {
      logosLocale,
      skills,
    }
  },
  data() {
    return {
      page: logos(this),
      mdiVectorRadius,
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
      return this.logosLocale ? this.logosLocale : []
    },
    logoFiltered() {
      const logos = this.logosLocale

      return logos.sort(
        (a, b) =>
          new Date(b.created).setHours(0, 0, 0, 0) -
          new Date(a.created).setHours(0, 0, 0, 0)
      )
    },
  },
}
</script>

<style lang="scss">
.page {
  &__des-logo {
    --stop-color-one: var(--v-success-darken3);
    --stop-color-two: var(--v-success-lighten1);
  }
}
</style>
