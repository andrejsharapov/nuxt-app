<template lang="pug">
.mb-4.article-post(transition='scroll-y-reverse-transition')
  v-row.card-view(no-gutters)
    //- SECTION IMAGE
    v-col(cols='12', sm='4')
      v-list-item-subtitle.mb-4.ml-md-7.text-overline.accent--text(
        v-if='articleType'
      )
        v-icon(left, small, color='accent') {{ mdiBookArrowDownOutline }}
        | {{ articleType }}

      v-card.hidden.mb-md-4.rounded-lg(
        :flat='$vuetify.breakpoint.smAndDown',
        :class='{ "card-view__image": $vuetify.breakpoint.mdAndUp }'
      )
        v-img(
          lazy-src='https://fakeimg.pl/300/e9ecf2/1e1e24?text=IMG',
          :src='article.img.src ? article.img.src : "https://fakeimg.pl/300/e9ecf2/1e1e24?text=NOT FOUND"',
          alt='',
          aspect-ratio='1.7'
        )
          template(#placeholder)
            v-row.fill-height.ma-0(align='center', justify='center')
              v-progress-circular(indeterminate, color='grey lighten-5')

    //- /SECTION

    //- SECTION CONTENT
    v-col(cols='12', sm='8')
      v-card.view-card__content.mt-sm-4.ml-0.ml-lg-4(flat, color='transparent')
        v-card-subtitle.d-sm-flex.pb-0
          | {{ $tc("category", 0) }} &mdash;&nbsp;
          strong {{ article.category.name ? article.category.name : $tc("category", 2) }}
          v-spacer
          | {{ $t("date.default") }} &mdash;&nbsp;
          strong {{ formatDate(article.createdAt) }}

        //- LINK
        nuxt-link(:to='localePath(`/articles/${article.slug}`)')
          v-card-title.pb-2.text-break-word.font-weight-bold.primary--text {{ article.title }}

        v-card-text.pt-0.text-wrap
          | {{ article.description }}

        v-card-text.py-0
          v-chip-group
            v-chip(
              v-for='(value, index) in Array.isArray(article.category.tags) ? article.category.tags : [article.category.tags]',
              :key='index',
              draggable,
              label,
              outlined,
              disabled
            ) {{ value }}
    //- /SECTION
</template>

<script>
import { mdiBookArrowDownOutline } from '@mdi/js'

export default {
  name: 'ArticlePost',
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      mdiBookArrowDownOutline,
    }
  },
  computed: {
    articleType() {
      return this.article?.type
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>
