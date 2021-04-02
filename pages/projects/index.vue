<template lang="pug">
.page__projects
  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line-three(
        absolute,
        right='0',
        bottom='0',
        left='0',
        :width='null',
        :height='null'
      )

    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiLightbulbOn',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  s-history-back
  v-container
    v-row
      v-col(cols='12', sm='9')
        p {{ $t("pages.projects.message") }}

      v-col.d-none.d-sm-block.mt-sm-n16.text-center(cols='12', sm='3')
        .position-absolute.mt-n8
          lazy-s-fish-pages-projects(width='200', :height='null')

      v-col(cols='12')
        template(v-if='localeItems')
          lazy-s-page-projects-card(
            v-for='item in localeItems',
            :key='item.slug',
            :project='item'
          )
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiLightbulbOn } from '@mdi/js'
import { projects } from '~/lib/page-meta'

export default {
  async asyncData({ $content, params, app }) {
    const projectsLocale = await $content(
      `${app.i18n.locale}/projects`,
      params.slug
    )
      .sortBy('created', 'desc')
      .fetch()

    return {
      projectsLocale,
    }
  },
  data() {
    return {
      page: projects(this),
      mdiLightbulbOn,
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
      return this.projectsLocale ? this.projectsLocale : []
    },
  },
}
</script>

<style>
.page__projects {
  --stop-color-one: var(--orange);
  --stop-color-two: var(--yellow);
}
</style>
