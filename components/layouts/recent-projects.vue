<template lang="pug">
.recent-projects
  v-menu(
    transition='scroll-y-reverse-transition',
    :min-width='$vuetify.breakpoint.mdAndUp ? "420" : "290"',
    max-width='500',
    offset-y,
    offset-overflow,
    origin='top right',
    :open-on-hover='$vuetify.breakpoint.smAndUp',
    close-delay='200',
    nudge-bottom='12',
    content-class='shadow-lg recent-projects__menu'
  )
    template(#activator='{ on: menu }')
      v-btn.mx-2(icon, v-on='{ ...menu }')
        v-badge(
          v-if='recentProjects.length >= 1',
          :content='recentProjects.length',
          label='projects',
          left,
          overlap,
          color='red darken-3'
        )
          v-icon {{ mdiBellRingOutline }}
        v-icon(v-else) {{ mdiBellOutline }}

    perfect-scrollbar
      v-list
        v-subheader {{ $t("projects.recent") }}
        v-divider(inset)
        v-list-item-group(
          v-if='recentProjects.length >= 1',
          active-class='amber lighten-4'
        )
          v-list-item.px-0(
            v-for='work in recentProjects',
            :key='work.slug',
            exact,
            :to='work.path',
            :title='work.title'
          )
            v-card.fill-width(flat, tile, color='transparent')
              v-row.ma-0.flex-column.flex-sm-row(
                :no-gutters='$vuetify.breakpoint.smAndUp'
              )
                v-col.pa-3.d-flex.justify-center.align-center(
                  cols='12',
                  sm='6'
                )
                  v-skeleton-loader(v-if='!work.img.src', type='image')
                  v-img(
                    v-else,
                    :src='work.img.src',
                    :alt='work.img.alt',
                    aspect-ratio='2'
                  )
                v-col.px-sm-3(cols='12', sm='6')
                  v-card-title.px-0.text-subtitle-2.font-weight-bold {{ work.title }}
                  v-card-subtitle.px-0.text-caption {{ formatDate(work.created) }}
                  v-card-text.px-0.text-no-wrap.text-truncate {{ work.ux.price }}
              v-divider

        v-list-item(v-else)
          v-list-item-title {{ $t("projects.not-found") }}
</template>

<script>
import { mdiBellOutline, mdiBellRingOutline } from '@mdi/js'
import moment from 'moment'

export default {
  name: 'RecentProjects',
  data() {
    return {
      mdiBellOutline,
      mdiBellRingOutline,
      all: [],
      desEmailLocale: [],
      desLogoLocale: [],
      desSiteLocale: [],
      devSiteLocale: [],
    }
  },
  async fetch() {
    this.desEmailLocale = await this.$content(
      `${this.$i18n.locale}/cases/design/email`
    )
      .where({ hide: false, type: 'des-email' })
      .only(['title', 'created', 'slug', 'type', 'img', 'ux', 'path'])
      .fetch()

    this.devSiteLocale = await this.$content(
      `${this.$i18n.locale}/cases/dev/websites`
    )
      .where({ hide: false, type: 'dev-site' })
      .only(['title', 'created', 'slug', 'type', 'img', 'ux', 'path'])
      .fetch()

    this.desSiteLocale = await this.$content(
      `${this.$i18n.locale}/cases/design/websites`
    )
      .where({ hide: false, type: 'des-site' })
      .only(['title', 'created', 'slug', 'type', 'img', 'ux', 'path'])
      .fetch()

    this.desLogoLocale = await this.$content(
      `${this.$i18n.locale}/cases/design/logo`
    )
      .where({ hide: false, type: 'des-logo' })
      .only(['title', 'created', 'slug', 'type', 'img', 'ux', 'path'])
      .fetch()
  },
  computed: {
    localeCases() {
      return this.all.concat(
        this.desEmailLocale,
        this.desLogoLocale,
        this.desSiteLocale,
        this.devSiteLocale
      )
    },
    recentProjects() {
      const projects = this.localeCases?.length
        ? this.localeCases.filter(
            (el) =>
              moment(el.created, 'YYYY-MM-DD').add(1, 'months') >= new Date()
          )
        : []

      return projects
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

<style lang="scss">
@media (--sm-max) {
  .recent-projects {
    &__menu .ps {
      height: 22rem;
    }
  }
}
</style>
