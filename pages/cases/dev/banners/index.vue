<template lang="pug">
.page__dev-banners
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-flies-stars
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiVectorBezier',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row.align-end
      v-col(cols='12', sm='8')
        p {{ $t("pages.dev-banners.advantage.prepend") }}

      v-col.d-none.d-sm-block.mt-sm-n15.text-center(
        cols='12',
        sm='4',
        style='z-index: 2'
      )
        .mt-sm-n12
          s-fish-pages-banners(:width='250')

      v-col(cols='12', md='10')
        v-row
          v-col(
            v-for='(item, i) in $t("pages.dev-banners.advantage.list")',
            :key='i',
            cols='12'
          )
            v-card.fill-height.shadow-sm
              v-list-item
                v-list-item-icon
                  v-icon(large, color='success', v-html='lustNum[i]')
                v-list-item-content
                  v-list-item-title.text-wrap {{ item }}

      v-col(cols='12', md='2')
        v-row
          v-col.d-flex.justify-center.align-center.fill-height(
            v-for='(skill, index) in skills.list',
            :key='index',
            cols='6',
            sm='3',
            md='12'
          )
            v-sheet.d-flex.justify-center.align-center.rounded-lg.shadow-sm(
              width='92',
              height='92'
            )
              v-img(
                :src='`/src/skills/${skill.img.src}.svg`',
                :alt='skill.img.alt',
                contain,
                max-width='48',
                max-height='48'
              )

      p.mt-3.px-3 {{ $t("pages.dev-banners.advantage.append") }}

      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')
        v-row(v-if='localeItems.length')
          v-col(v-for='banner of localeItems', :key='banner.slug', cols='12')
            s-pages-cases-components-card-row(:site='banner')
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import {
  mdiVectorBezier,
  mdiNumeric1Box,
  mdiNumeric2Box,
  mdiNumeric3Box,
  mdiNumeric4Box,
  mdiNumeric5Box,
} from '@mdi/js'
import { devBanners } from '~/lib/page-meta'

export default {
  name: 'CasesDevBannersIndex',
  async asyncData({ $content, app, params }) {
    const getBanners = await $content(
      `${app.i18n.locale}/cases/dev/banners`,
      params.slug
    )
      .where({ type: 'dev-banner', hide: false })
      .sortBy('created', 'desc')
      .fetch()

    const skills = await $content('skills/dev-banners').fetch()

    return {
      getBanners,
      skills,
    }
  },
  data() {
    return {
      page: devBanners(this),
      mdiVectorBezier,
      lustNum: [
        mdiNumeric1Box,
        mdiNumeric2Box,
        mdiNumeric3Box,
        mdiNumeric4Box,
        mdiNumeric5Box,
      ],
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
      return this.getBanners ? this.getBanners : []
    },
  },
}
</script>

<style lang="scss">
.page {
  &__dev-banners {
    --stop-color-one: #6e349e;
    --stop-color-two: #2c0569;
  }
}
</style>
