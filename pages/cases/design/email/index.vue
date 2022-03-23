<template lang="pug">
.page__email
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line(
        absolute,
        right='0',
        bottom='-7',
        left='0',
        :width='null',
        :height='null'
      )
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiEmailFastOutline',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='7')
        p {{ $tc("pages.des-email.message") }}

      v-col.d-none.d-sm-block.mt-sm-n15.text-center(
        cols='12',
        sm='5',
        style='z-index: 2'
      )
        .mt-sm-n12
          s-fish-pages-des-email(height='200', :width='null')

      //- SECTION AIDA
      v-col(cols='12')
        s-section-heading-anchor(
          :title='$t("pages.des-email.marketing.title")',
          anchor='marketing'
        )
        p {{ $t("pages.des-email.marketing.message") }}
        p {{ $t("pages.des-email.aida.about") }}

        v-list.aida(dense, color='transparent')
          v-list-item(
            v-for='i of $t("pages.des-email.aida.decoding")',
            :key='i'
          )
            v-list-item-title {{ i }}
      //- /SECTION

      //- SECTION WORKS
      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')

        .d-flex(v-if='localeItems.length')
          v-spacer
          v-btn-toggle(
            v-if='$vuetify.breakpoint.mdAndUp',
            v-model='cardView',
            mandatory,
            borderless,
            color='primary'
          )
            v-btn(:ripple='false')
              v-icon {{ mdiViewWeek }}
            v-btn(v-if='$vuetify.breakpoint.mdAndUp', :ripple='false')
              v-icon {{ mdiViewList }}

        v-row(v-if='localeItems.length')
          v-col(
            v-for='(item, index) in localeItems',
            :key='index',
            cols='12',
            :md='cardView === 0 ? "4" : "12"'
          )
            s-pages-cases-components-card-grid(
              v-if='cardView === 0',
              position='top center',
              :site='item'
            )
            s-pages-cases-components-card-row(
              v-if='cardView === 1',
              position='top center',
              :site='item'
            )
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
      //- /SECTION
</template>

<script>
import { mdiEmailFastOutline, mdiViewWeek, mdiViewList } from '@mdi/js'
import { desEmail as email } from '~/lib/page-meta'

export default {
  name: 'CasesDesignEmailIndex',
  // REVIEW remove after filling en_US
  // middleware({ redirect, app }) {
  //   if (app.i18n.locale === 'en') {
  //     return redirect('301', `/${app.i18n.locale}/cases`)
  //   }
  // },
  async asyncData({ $content, app, params }) {
    const emailLocale = await $content(
      `${app.i18n.locale}/cases/design/email`,
      params.slug
    )
      .where({ type: 'des-email', hide: false })
      .sortBy('created', 'desc')
      .fetch()

    return {
      emailLocale,
    }
  },
  data() {
    return {
      page: email(this),
      mdiEmailFastOutline,
      mdiViewWeek,
      mdiViewList,
      cardView: 0,
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
      return this.emailLocale?.length ? this.emailLocale : []
    },
  },
}
</script>

<style lang="scss">
.page {
  &__email {
    --stop-color-one: #d81943;
    --stop-color-two: #810a99;
    --gradient-default: linear-gradient(
      45deg,
      var(--stop-color-one, var(--primary)) 50%,
      var(--stop-color-two, var(--accent)) 100%
    );

    .aida {
      .v-list-item {
        &:last-child {
          &:not(:hover) {
            opacity: 0.15;
          }
        }
      }
    }
  }
}
</style>
