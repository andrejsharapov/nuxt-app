<template>
  <v-card class="mb-4 px-4 shadow-sm article-breadcrumbs">
    <v-breadcrumbs :items="items" divider="·" />
  </v-card>
</template>

<script>
export default {
  name: 'ArticleBreadcrumbs',
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      items: [
        {
          text: this.$t('pages.home.title'),
          disabled: false,
          href: this.localePath('/'),
        },
        {
          text: this.$t('pages.articles.title'),
          disabled: false,
          href: this.localePath('/articles'),
        },
        {
          text: this.article.title,
          disabled: true,
          href: '',
        },
      ],
    }
  },
}
</script>
