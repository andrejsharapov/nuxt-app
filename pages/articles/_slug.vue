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
        content-class='shadow-up',
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
                    style='margin-top: 5.5em; margin-right: 1.05em; z-index: 1',
                    @click='viewPanel',
                    v-on='{ ...tooltip, ...menu }'
                  )
                    v-icon {{ mdiTableOfContents }}
            span
              | {{ hidePanel ? $tc("show", 1) : $tc("hide", 1) }}
              | {{ $tc("table-of-contents", 2) }}

        v-expansion-panels.rounded-md.shadow-sm(
          v-model='panel',
          :multiple='!$vuetify.breakpoint.xs',
          flat,
          transition='scroll-x-reverse-transition',
          style='position: sticky; top: 4em'
        )
          v-expansion-panel(
            :style='{ backgroundColor: $vuetify.theme.dark ? "var(--dark-sheet)" : "" }'
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
          //- s-article-breadcrumbs(
          //-   v-if='$vuetify.breakpoint.mdAndUp',
          //-   :article='article'
          //- )
          v-card.mb-4.pa-2.pa-md-4.shadow-base
          //- art-header(:article='article')
          nuxt-content(:document='article')
          //- art-author(:article='article')
          //- art-arrows(
          //-   v-if='$vuetify.breakpoint.mdAndUp',
          //-   :prev='prev',
          //-   :next='next'
          //- )
          v-lazy(
            v-model='lazyComments',
            :options='{ threshold: 0.5 }',
            transition='fade-transition'
          )
            //- comments
      //- /SECTION
</template>

<script>
import { mdiTableOfContents } from '@mdi/js'
import Prism from '~/plugins/markdown-theme-prism'

export default {
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
