<template lang="pug">
.page__photoshop
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
        :icon='mdiVectorPolylineEdit',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='8')
        p(v-html="$t('pages.photoshop.message', { link: \"<a href='https://vk.com/madeasstudio' target='_blank' title='madeasstudio'>madeasstudio</a>\" })")

      v-col.d-none.d-sm-block.mt-sm-n16.text-center(
        cols='12',
        sm='4',
        style='z-index: 2'
      )
        .mt-sm-n16
          s-fish-pages-photoshop(height='200', :width='null')

      v-col(cols='12')
        p {{ $t('pages.photoshop.games') }}

        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')
        p {{ $t('pages.photoshop.now') }}

        v-row(v-if='localeItems.length')
          v-col(v-for='(item, index) of localeItems', :key='index', cols='12', md='6')
            s-pages-photoshop-work-examples(
            :item='item'
            :sources='cardView'
          )
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiVectorPolylineEdit } from '@mdi/js'
import { photoshop } from '~/lib/page-meta'

export default {
  name: 'PhotoshopIndex',
  async asyncData({ $content, params }) {
    const photoshopList = await $content('works/photoshop', params.slug)
      .sortBy('date', 'desc')
      .fetch()

    return {
      photoshopList,
    }
  },
  data() {
    return {
      page: photoshop(this),
      mdiVectorPolylineEdit,
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
      return this.photoshopList ? this.photoshopList : []
    },
  },
}
</script>

<style>
.page__photoshop {
  --stop-color-one: #190d80;
  --stop-color-two: #1cb7ff;
}
</style>
