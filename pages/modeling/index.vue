<template lang="pug">
.page__3d-modeling
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-modeling-cube(
        absolute,
        top='32',
        right='0',
        left='auto',
        :width='530',
        :height='null'
      )
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiPrinter3d',
        :duration='2000',
        :message='$t("pages.shown")'
      )
  v-container
    v-row
      v-col(cols='12', sm='9')
        p(v-html="$t('pages.modeling.message', { pack: \"<a href='/projects' target='_blank' title=''>пакет текстур</a>\", blockbench: \"<a href='https://www.blockbench.net/' target='_blank' title=''>blockbench</a>\"})")

      v-col.d-none.d-sm-block.mt-sm-n16.text-center(cols='12', sm='3')
        .position-absolute.mt-n10
          lazy-s-fish-pages-modeling(width='290', :height='null')

      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')
        lazy-s-pages-modeling-card-model(
          v-if='localeItems.length',
          :items='localeItems'
        )
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiPrinter3d, mdiOpenInNew } from '@mdi/js'
import { modeling } from '~/lib/page-meta'

export default {
  name: 'ModelingIndex',
  async asyncData({ $content, params }) {
    const modelsLocale = await $content('modeling', params.slug)
      .where({ type: 'modeling' })
      .sortBy('date', 'desc')
      .fetch()

    return {
      modelsLocale,
    }
  },
  data() {
    return {
      page: modeling(this),
      mdiPrinter3d,
      mdiOpenInNew,
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
      return this.modelsLocale ? this.modelsLocale : []
    },
  },
}
</script>

<style lang="sass">
.page
  &__3d-modeling
    --stop-color-one: #190d80
    --stop-color-two: #31a169
</style>
