<template lang="pug">
.recent-projects
  v-menu(
    transition='scroll-y-reverse-transition',
    max-width='500',
    offset-y,
    :open-on-hover='$vuetify.breakpoint.smAndUp',
    close-delay='200',
    nudge-bottom='12',
    content-class='shadow-lg recent-projects__menu'
  )
    template(#activator='{ on: menu }')
      v-btn.mx-2(icon, v-on='{ ...menu }')
        v-badge(
          v-if='setActualEvent.length >= 1',
          :content='setActualEvent.length',
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
          v-if='setActualEvent.length >= 1',
          active-class='amber lighten-4'
        )
          v-list-item.px-0(
            v-for='work in setActualEvent',
            :key='work.slug',
            exact,
            :to='work.path'
          )
            v-card(flat, tile, color='transparent')
              v-row.ma-0.flex-column.flex-sm-row(
                :no-gutters='$vuetify.breakpoint.smAndUp'
              )
                v-col.pa-3.d-flex.justify-center.align-center(cols='5')
                  v-img(:src='work.img.src', :alt='work.img.alt')
                v-col.pr-sm-3(cols='7')
                  v-card-title.px-0.text-subtitle-2.font-weight-bold {{ work.title }}
                  v-card-subtitle.px-0.text-caption {{ formatDate(work.created) }}
                  v-card-text.px-0 {{ work.ux.price }}
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
      devSiteLocale: [],
      desSiteLocale: [],
    }
  },
  async fetch() {
    this.devSiteLocale = await this.$content(
      `${this.$i18n.locale}/cases/dev/websites`
    )
      .where({ hide: false, type: 'dev-site' })
      .only(['title', 'created', 'slug', 'type', 'img', 'ux'])
      .fetch()

    this.desSiteLocale = await this.$content(
      `${this.$i18n.locale}/cases/design/websites`
    )
      .where({ hide: false, type: 'des-site' })
      .only(['title', 'created', 'slug', 'type', 'img', 'ux'])
      .fetch()
  },
  computed: {
    localeCases() {
      return this.desSiteLocale || this.devSiteLocale
        ? this.desSiteLocale.concat(this.devSiteLocale)
        : []
    },
    setActualEvent() {
      const actualEvent = this.localeCases
        ? this.localeCases.filter(
            (el) =>
              moment(el.created, 'YYYY-MM-DD').add(1, 'months') >= new Date()
          )
        : []

      return actualEvent
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

<style>
@media (--sm-max) {
  .recent-projects__menu .ps {
    height: 22rem;
  }
}
</style>
