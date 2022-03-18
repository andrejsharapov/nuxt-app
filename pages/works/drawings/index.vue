<template lang="pug">
.page__drawings
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line-four(
        absolute,
        right='0',
        bottom='0',
        left='0',
        :width='null',
        :height='null'
      )
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems.list',
        :icon='mdiDraw',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='8')
        p {{ $t("pages.drawings.message") }}

      v-col.d-none.d-sm-block.mt-sm-n16.text-center(cols='12', sm='4')
        .position-absolute.mt-n12
          lazy-s-fish-pages-drawings(height='270', :width='null')

      v-col(cols='12')
        lazy-s-works-not-found(
          v-if='localeItems.length === 0',
          :message='$t("works.works-not-found")'
        )
        template(v-else)
          s-section-heading-anchor(
            :title='$t("works.examples")',
            anchor='works'
          )
          lazy-s-pages-drawings-image-list(:items='localeItems.list')
</template>

<script>
import { mdiDraw } from '@mdi/js'
import { drawings } from '~/lib/page-meta'

export default {
  name: 'DrawingsIndex',
  async asyncData({ $content, params }) {
    const drawingsList = await $content('works/drawings/list', params.slug)
      .only('list')
      .fetch()

    return {
      drawingsList,
    }
  },
  data() {
    return {
      page: drawings(this),
      mdiDraw,
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
      return this.drawingsList ? this.drawingsList : []
    },
  },
}
</script>

<style lang="scss">
.page {
  &__drawings {
    --stop-color-one: var(--pink);
    --stop-color-two: var(--orange);
  }
}
</style>
