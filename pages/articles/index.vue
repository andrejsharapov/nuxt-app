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
        .d-flex.flex-column
          s-section-heading-anchor(:title='$t("news.about")', anchor='media')
          v-row.mb-2
            v-col.d-flex.align-center(cols='12')
              .d-inline-grid.gap-3(:class='`grid-cols-${media.length}`')
                v-btn.rounded(
                  v-for='item in media',
                  :key='item.title',
                  :href='item.to',
                  :title='item.title',
                  target='_blank',
                  fab,
                  large,
                  elevation='0',
                  color='success'
                )
                  v-icon(large) {{ item.icon }}
              v-chip-group
                v-hover(v-slot='{ hover }')
                  v-card.mx-3.px-3.py-2.transition(
                    :flat='!hover',
                    :class='hover || $vuetify.breakpoint.xs ? "white shadow-sm" : "transparent"',
                    :href='storyLocale().path',
                    rel='noopener noreferrer',
                    target='_blank'
                  )
                    v-list-item-title.text-wrap.text-body-2.text-sm-subtitle-2.mb-3 {{ storyLocale().title }}
                    v-list-item-subtitle.text-caption {{ formatDate(storyLocale().date) }}
          v-divider

      v-col(cols='12')
        s-section-heading-anchor(
          :title='$t("pages.articles.title")',
          anchor='articles'
        )
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
import { mdiBookOpenPageVariantOutline, mdiOpenInNew } from '@mdi/js'
import { articles } from '~/lib/page-meta'

export default {
  name: 'ArticlesIndex',
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
      mdiOpenInNew,
      media: [
        {
          icon: '$mediumFilled',
          title: 'Medium',
          to: 'https://medium.com/@andrejsharapov',
        },
        {
          icon: '$devToOutline',
          title: 'DEV community',
          to: 'https://dev.to/andrejsharapov',
        },
        {
          icon: '$instagramOutline',
          title: 'Instagram',
          to: 'https://www.instagram.com/andrej.sharapov',
        },
      ],
      addClassBtn: false,
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
  methods: {
    storyLocale() {
      if (this.$i18n.locale === 'ru') {
        return {
          title: 'Что делать, если вы разработчик-одиночка?',
          path: 'https://geekbrains.ru/posts/single_developer_story',
          date: '2018-11-28',
        }
      } else if (this.$i18n.locale === 'en') {
        return {
          title: 'What if you are a solo developer?',
          // eslint-disable-next-line
          path: 'https://andrejsharapov.medium.com/what-if-you-are-a-solo-developer-7c6cee66bf48',
          date: '2019-03-15',
        }
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  &__articles {
    --stop-color-one: var(--primary);
    --stop-color-two: var(--accent);
  }
}
</style>
