<template lang="pug">
.page__articles
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-flies-bubbles
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiBookOpenPageVariantOutline',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='8', md='9')
        .mt-lg-n16
          s-articles-search(
            :module='localeItems',
            :outlined='true',
            :label='$t("search.label")',
            :placeholder='$t("search.placeholder")'
          )

      v-col.mt-md-n16(cols='12', sm='4', md='3', style='z-index: 2')
        s-fish-pages-articles.mt-sm-n8.mt-md-n16(width='260', :height='null')

      v-col(cols='12')
        template(v-if='localeItems.length')
          s-articles-post(
            v-for='article of localeItems',
            :article='article',
            :key='article.slug'
          )
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
// middleware({ redirect }) {
//   return redirect('301', '/articles/page/1')
// },
import { mdiBookOpenPageVariantOutline } from '@mdi/js'
import { articles } from '~/lib/page-meta'

export default {
  async asyncData({ $content, params, app }) {
    const articlesLocale = await $content(
      `${app.i18n.locale}/articles`,
      params.slug
    )
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articlesLocale,
    }
  },
  data() {
    return {
      page: articles(this),
      mdiBookOpenPageVariantOutline,
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

<style scoped>
.page__articles {
  --stop-color-one: var(--primary);
  --stop-color-two: var(--accent);
}
</style>
