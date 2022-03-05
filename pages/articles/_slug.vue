<template lang="pug">
.page__articles-content
  s-history-back

  v-container(fluid)
    v-row
      //- ANCHOR MENU
      v-menu(
        offset-y,
        nudge-bottom='12',
        transition='scroll-y-reverse-transition',
        content-class='shadow-lg',
        :close-on-content-click='false'
      )
        template(#activator='{ on: menu }')
          v-tooltip(left)
            template(#activator='{ on: tooltip }')
              v-hover(v-slot='{ hover }')
                v-fab-transition
                  v-btn(
                    v-if='$vuetify.breakpoint.mdAndUp',
                    dark,
                    fixed,
                    top,
                    right,
                    fab,
                    small,
                    :color='hover ? "accent" : "primary"',
                    :class='{ accent: !hidePanel }',
                    style='margin-top: 5.5em; margin-right: 1.05em; z-index: 3',
                    @click='viewPanel',
                    v-on='{ ...tooltip, ...menu }'
                  )
                    v-icon {{ mdiTableOfContents }}
            span
              | {{ hidePanel ? $tc("events.show", 1) : $tc("events.hide", 1) }}
              | {{ $tc("table-of-contents", 2) }}

        v-expansion-panels.rounded-md.shadow-sm(
          v-model='panel',
          :multiple='!$vuetify.breakpoint.xs',
          flat,
          transition='scroll-x-reverse-transition',
          style='position: sticky; top: 4em'
        )
          v-expansion-panel(
            :style='{ backgroundColor: $vuetify.theme.dark ? "var(--sheet)" : "" }'
          )
            v-expansion-panel-header.py-0(style='height: 56.8px')
              v-subheader.px-2 {{ $tc("table-of-contents", 1) }}
            v-expansion-panel-content.px-0
              v-divider(inset)
              v-list.px-0(dense)
                v-list-item-group(color='accent')
                v-list-item(
                  v-for='link of article.toc',
                  :key='link.id',
                  :href='$nuxt.$route.path + "#" + link.id'
                )
                  v-list-item-content
                    v-list-item-subtitle {{ link.text }}

      //- SECTION CONTENT
      v-col.order-1.order-md-0(cols='12')
        article
          s-articles-breadcrumbs(
            v-if='$vuetify.breakpoint.mdAndUp',
            :article='article'
          )
          v-card.mb-4.pa-2.pa-md-4.shadow-md
            s-articles-header(:article='article')
            nuxt-content(:document='article')
            s-articles-author(:article='article')
            s-articles-arrows(
              v-if='$vuetify.breakpoint.mdAndUp',
              :prev='prev',
              :next='next'
            )
          v-lazy(
            v-model='lazyComments',
            :options='{ threshold: 0.5 }',
            transition='fade-transition'
          )
            disqus
      //- /SECTION
</template>

<script>
import { mdiTableOfContents } from '@mdi/js'
import { appMeta as app } from '~/config/app'
import Prism from '~/plugins/markdown-theme-prism'

export default {
  name: 'ArticlesSlug',
  scrollToTop: true,
  async asyncData({ $content, params, app }) {
    const article = await $content(
      `${app.i18n.locale}/articles`,
      params.slug
    ).fetch()

    const [prev, next] = await $content(`${app.i18n.locale}/articles`)
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
  data() {
    return {
      mdiTableOfContents,
      lazyComments: false,
      panel: [0],
      hidePanel: true,
    }
  },
  head() {
    return {
      title: this.article.title,
      titleTemplate: `%s · ${this.$t('pages.articles.title')} · ${this.$t(
        'author.name'
      )}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${app.host.url}/articles/${this.article.slug}`,
        },
        { hid: 'og:image', property: 'og:image', content: this.socialImage },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.socialImage,
        },
        {
          hid: 'twitter:image:',
          name: 'twitter:image:alt',
          content: this.article.img.src ? 'Post image' : app.host.name,
        },
      ],
    }
  },
  computed: {
    socialImage() {
      const image = this.article.img.src ? this.article.img.src : 'share.jpg'
      if (this.isDev) {
        return `${this.app.host.url}/${image}`
      } else {
        return `${this.article.img.src}`
      }
    },
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    viewPanel() {
      return (this.hidePanel = !this.hidePanel)
    },
  },
}
</script>

<style>
.nuxt-content ul {
  margin-bottom: 1rem;
}

.nuxt-content h3 {
  margin-bottom: 0.5rem;
}
</style>
