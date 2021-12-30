<template lang="pug">
.page__timeline
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line-two(
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
        :icon='mdiTimeline',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='8')
        p {{ $t("pages.timeline.message") }}

      v-col.d-none.d-sm-block.mt-sm-n16.text-center(cols='12', sm='4')
        .position-absolute.mt-n8
          lazy-s-fish-pages-timeline(width='290', :height='null')

      v-col(cols='12')
        lazy-s-pages-timeline-items(v-if='localeItems', :items='localeItems')
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiTimeline } from '@mdi/js'
import { timeline } from '~/lib/page-meta'

export default {
  name: 'TimelineIndex',
  async asyncData({ $content, params, app }) {
    const timeLineLocale = await $content(
      `${app.i18n.locale}/timeline`,
      params.slug
    )
      .sortBy('date', 'desc')
      .fetch()

    return {
      timeLineLocale,
    }
  },
  data() {
    return {
      page: timeline(this),
      mdiTimeline,
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
      return this.timeLineLocale ? this.timeLineLocale : []
    },
  },
}
</script>

<style>
.page__timeline {
  --stop-color-one: var(--v-error-darken2);
  --stop-color-two: var(--v-error-lighten3);
}

.v-timeline {
  @media (--sm-min) {
    background-image: url('/src/confetti-big.svg');
    background-repeat: repeat-y;
  }
}
</style>
