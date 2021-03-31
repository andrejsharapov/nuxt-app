<template lang="pug">
.page__timeline
  s-layout-components-back-image(:page='page')
    template(#back-image)
      //- REVIEW bottom='-7',
      s-back-waves-lines-two(
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

  s-history-back
  v-container
    v-row
      v-col(cols='12')
        v-card-title Hello!
</template>

<script>
import { mdiTimeline } from '@mdi/js'
import { timeline } from '~/lib/page-meta'

export default {
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
  --stop-color-one: var(--pink);
  --stop-color-two: var(--v-error-lighten3);
}
</style>
