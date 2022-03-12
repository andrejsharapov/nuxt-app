<template lang="pug">
.py-1.primary(style='width: 100%')
  v-alert.mb-0.primary--text.text--lighten-4(
    v-for='(doc, index) of docs',
    :key='index',
    tile,
    color='transparent'
  )
    v-row
      //- SECTION MENU
      v-col.py-0(
        cols='auto',
        :class='$vuetify.breakpoint.xs ? "text-center" : "text-right"'
      )
        v-menu(
          top,
          offset-y,
          nudge-top='6',
          transition='scroll-y-transition',
          content-class='shadow-lg'
        )
          template(#activator='{ on }')
            v-btn.text-lowercase(dark, outlined, rounded, text, v-on='on')
              v-icon(left, small) {{ mdiTagOutline }}
              | v{{ doc.content.versions.tag }}
              v-icon(right) {{ mdiMenuDown }}

          v-list(dense, nav, subheader)
            //- terms & privacy
            v-subheader {{ $t("app.general-information") }}
            template(v-for='(value, index) in doc.content.information')
              //- SECTION DIALOG
              v-dialog(v-model='value.model', :key='index', persistent)
                template(#activator='{ on }')
                  v-list-item(:key='index', v-on='on')
                    v-list-item-avatar(:color='value.type')
                      v-icon(size='28', color='blue-grey darken-4') {{ value.icon }}
                    v-list-item-content
                      v-list-item-title {{ docTitle(value) }}
                      v-list-item-subtitle {{ formatDate(value.update) }}
                //- !SECTION

                //- SECTION DIALOG_OPENED
                v-card(tile)
                  v-banner(single-line, sticky, color='white')
                    v-card-actions
                      v-card-title.pa-0.grey--text.text--darken-1 {{ $t("app.last-revised") }}, {{ formatDate(value.update) }}
                      v-spacer
                      v-btn(
                        color='grey darken-1',
                        icon,
                        @click='value.model = false'
                      )
                        v-icon $mdiClose
                  v-card-text.pt-2
                    template(v-if='value.to === "privacy"')
                      nuxt-content(:document='privacy')
                    template(v-if='value.to === "terms"')
                      nuxt-content(:document='terms')
                //- !SECTION

            //- license
            v-subheader {{ $t("app.license") }}
            v-list-item(
              :href='doc.content.license.to',
              target='_blank',
              rel='noopener noreferrer'
            )
              v-list-item-avatar(:color='doc.content.license.type')
                v-icon(size='28', color='blue-grey darken-4') {{ doc.content.license.icon }}
              v-list-item-content
                v-list-item-title {{ $t("app.license") }}
                v-list-item-subtitle {{ doc.content.license.subtitle }}

          v-divider

          v-list(dense, subheader)
            v-subheader {{ $t("events.updates") }}
            v-list-item(
              :href='doc.content.versions.to',
              target='_blank',
              rel='noopener noreferrer'
            )
              v-list-item-avatar(:color='doc.content.versions.type')
                v-icon(size='28', color='blue-grey darken-4') {{ mdiTagOutline }}
              v-list-item-content
                v-list-item-title v{{ doc.content.versions.tag }}
                v-list-item-subtitle {{ formatDate(doc.content.versions.date) }}
      //- /SECTION

      //- SECTION BUTTONS
      lazy-s-github-buttons
      //- /SECTION

      v-col.mt-4.mt-sm-0.mr-auto.py-0.d-flex.align-center.justify-center(
        v-if='$vuetify.breakpoint.smAndUp',
        cols='auto',
        sm='11',
        md='7',
        offset-x
      )
        span(v-html='doc.content.message ? doc.content.message : ""')
</template>

<script>
import { mdiTagOutline, mdiMenuDown } from '@mdi/js'

export default {
  name: 'FooterColor',
  data: () => ({
    docs: null,
    mdiTagOutline,
    mdiMenuDown,
    privacy: null,
    terms: null,
  }),
  async fetch() {
    this.docs = await this.$content('docs')
      .where({ title: 'footer-color-content' })
      .fetch()

    this.privacy = await this.$content('docs/privacy')
      .sortBy('id')
      .only(['body'])
      .fetch()

    this.terms = await this.$content('docs/terms')
      .sortBy('id')
      .only(['body'])
      .fetch()
  },
  computed: {
    info() {
      return this.docs ? this.docs : null
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
    docTitle(item) {
      const docTitle = () => {
        if (item.to === 'privacy') {
          return this.$t('app.privacy')
        } else if (item.to === 'terms') {
          return this.$t('app.terms')
        } else {
          return ''
        }
      }
      return docTitle()
    },
  },
}
</script>
