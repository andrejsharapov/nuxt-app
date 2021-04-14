<template lang="pug">
.page__articles
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-flies-bubbles
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiCodeJson',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='8', md='9')

      v-col.mt-md-n16(cols='12', sm='4', md='3', style='z-index: 2')
        s-fish-pages-articles.mt-sm-n8.mt-md-n16(width='260', :height='null')

      v-col(cols='12')
        pre {{ localeItems }}
</template>

<script>
import { mdiCodeJson } from '@mdi/js'
import { articles } from '~/lib/page-meta'

export default {
  async asyncData({ $content, params, app }) {
    const articlesLocale = await $content(
      `${app.i18n.locale}/articles`,
      params.slug
    )
      .only('body')
      .sortBy('updatedAt', 'desc')
      .fetch()

    return {
      articlesLocale,
    }
  },
  data() {
    return {
      page: articles(this),
      mdiCodeJson,
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
      return this.articlesLocale ? this.articlesLocale : []
    },
  },
}
</script>
