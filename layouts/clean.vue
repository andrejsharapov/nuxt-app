<template lang="pug">
v-app(v-resize='windowX')
  //- v-system-bar(absolute, color='warning')
  //-   .text-caption.white--text Consequat excepteur aute do elit eiusmod consequat anim ullamco enim.

  //- SECTION[epic=layout] HEADER
  v-app-bar(
    app,
    :clipped-left='clipped',
    fixed,
    :flat='!clipped',
    :hide-on-scroll='!clipped'
  )
    nuxt-link.mr-3(v-if='$vuetify.breakpoint.xs', :to='localePath("/")')
      img(
        src='~/assets/images/app-logo.svg?data',
        :alt='$t("host.name")',
        width='40',
        height='40'
      )
    s-layout-navbar-prepend.ml-n4(
      v-if='$vuetify.breakpoint.smAndUp && (clipped || !drawer)'
    )
    v-tooltip(bottom)
      template(#activator='{ on: sidebar }')
        v-btn(icon, v-on='{ ...sidebar }', @click.stop='drawer = !drawer')
          v-icon {{ drawer ? mdiSegment : mdiSortVariant }}
      span {{ $t("site.navbar.name") }}
    v-spacer
    lazy-s-layout-recent-projects
    lazy-s-layout-job-offer

    v-tooltip(bottom)
      template(#activator='{ on: settings}')
        v-btn(icon, v-on='settings', @click.stop='rightDrawer = !rightDrawer')
          v-icon {{ mdiCogOutline }}
      span {{ $t("settings") }}
  //- /SECTION

  //- SECTION[epic=layout] NAVIGATION
  v-navigation-drawer.layout__navbar(
    v-model='drawer',
    :mini-variant='miniVariant',
    :clipped='clipped',
    app,
    fixed,
    floating,
    :right='!right'
  )
    template(#prepend)
      s-layout-navbar-prepend(v-if='!clipped')
    perfect-scrollbar
      lazy-s-layout-navbar-list(:mini-variant='miniVariant', :navbar='navbar')
    //- template(#append)
    //-   s-layout-navbar-append(
    //-     :clipped='clipped',
    //-     :drawer='drawer',
    //-     :mini-variant='miniVariant'
    //-   )
  //- /SECTION

  //- SECTION[epic=layout] MAIN
  v-main
    v-container
      v-row
        v-col
          .pa-4.fill-height.d-flex.justify-center.align-center.flex-column.text-center
            lazy-s-fish-construction(:width='250', :height='250')
            .h2.text-h6.text-sm-h4.text-lg-h3 {{ $t("site.page.construction") }}
            .d-flex.flex-column.flex-sm-row.justify-center(style='width: 100%')
              .mt-4.mx-sm-4
                v-btn.shadow-sm(
                  :to='localePath("/")',
                  :block='$vuetify.breakpoint.xs',
                  x-large,
                  color='primary'
                ) {{ $t("btn.go.home") }}
              .mt-4.mx-sm-4
                v-btn(
                  :block='$vuetify.breakpoint.xs',
                  text,
                  x-large,
                  color='secondary',
                  @click='$router.back()'
                ) {{ $t("btn.go.back") }}
  //- /SECTION

  //- SECTION[epic=layout] RIGHT NAVIGATION
  v-navigation-drawer.right-navigation.layout__navbar(
    v-model='rightDrawer',
    :right='right',
    fixed,
    app,
    tag='aside',
    width='300',
    :class='{ "right-navigation__left": !right }'
  )
    template(#prepend)
      v-toolbar.text-h6.font-weight-medium.text--primary(flat)
        | {{ $t("settings") }}
        v-spacer
        v-btn(icon, @click='rightDrawer = !rightDrawer')
          v-icon $mdiClose
      v-divider

    perfect-scrollbar
      v-container
        //- ANCHOR LANG
        .mb-2
          v-list-item-title.mb-2.font-weight-bold {{ $t("app.lang.name") }}
          v-list-item-group.row.row--dense.mx-0(
            mandatory,
            active-class='primary white--text'
          )
            v-row.ma-0(dense)
              v-col(cols='6')
                v-list-item.align-center.justify-space-between.rounded.hidden(
                  :to='switchLocalePath("ru")',
                  @click.prevent='$fetch'
                )
                  .text-body-2.font-weight-medium Ru
                  v-icon.ml-2 {{ mdiTranslate }}

              v-col(cols='6')
                v-list-item.align-center.justify-space-between.rounded.hidden(
                  :to='switchLocalePath("en")',
                  @click.prevent='$fetch',
                  @click='noTranslation'
                )
                  .text-body-2.font-weight-medium En
                  v-icon.ml-2 {{ mdiTranslate }}

        //- ANCHOR THEMES
        v-divider.my-4(inset)
        v-list-item-title.mb-2.font-weight-bold {{ $t("app.themes.name") }}
        lazy-s-color-mode-picker

        //- ANCHOR HEADER
        v-divider.my-4(inset)
        v-list-item-title.mb-2.font-weight-bold {{ $t("site.header.name") }}:
          span.text-lowercase
            |
            | {{ $t("site.header.sticky") }}
        v-list-item-group.row.row--dense.mx-0(
          mandatory,
          active-class='primary white--text'
        )
          v-row.ma-0(dense)
            v-col(cols='6')
              v-list-item.align-center.justify-space-between.rounded.hidden(
                @click.stop='clipped = false'
              )
                .text-body-2.font-weight-medium {{ $t("no") }}
                v-icon.ml-2 {{ mdiTableRowRemove }}

            v-col(cols='6')
              v-list-item.align-center.justify-space-between.rounded.hidden(
                @click.stop='clipped = true'
              )
                .text-body-2.font-weight-medium {{ $t("yes") }}
                v-icon.ml-2 {{ mdiTableRow }}

        //- ANCHOR NAVIGATION
        v-divider.my-4(inset)
        v-list-item-title.mb-2.font-weight-bold {{ $t("site.navbar.name") }}
        v-list-item-group.row.row--dense.mx-0(
          mandatory,
          active-class='primary white--text'
        )
          v-row.ma-0(dense)
            v-col(cols='6')
              v-list-item.align-center.justify-space-between.rounded.hidden(
                @click.stop='miniVariant = false'
              )
                .text-body-2.font-weight-medium {{ $t("size.full") }}
                v-icon.ml-2 {{ mdiArrowExpandHorizontal }}

            v-col(cols='6')
              v-list-item.align-center.justify-space-between.rounded.hidden(
                @click.stop='miniVariant = true'
              )
                .text-body-2.font-weight-medium {{ $t("size.mini") }}
                v-icon.ml-2 {{ mdiArrowCollapseHorizontal }}

        //- ANCHOR POSITION NAVBAR
        v-divider.my-4(inset)
        v-list-item-title.mb-2.font-weight-bold {{ $t("settings") }}
        v-list-item-group.row.row--dense.mx-0(
          v-model='rightPosition',
          mandatory,
          active-class='primary white--text'
        )
          v-row.ma-0(dense)
            v-col(cols='6')
              v-list-item.align-center.justify-space-between.rounded.hidden(
                @click.native='right = false'
              )
                v-list-item-title {{ $tc("position.left", 1) }}
                v-icon(right) {{ mdiTableColumnPlusAfter }}

            v-col(cols='6')
              v-list-item.align-center.justify-space-between.rounded.hidden(
                @click.native='right = true'
              )
                v-list-item-title {{ $tc("position.right", 1) }}
                v-icon(right) {{ mdiTableColumnPlusBefore }}
  //- /SECTION

  //- SECTION[epic=layout] FOOTER
  s-layout-footer(:mini-variant='miniVariant', :drawer='drawer')
  //- /SECTION

  v-fab-transition(v-if='$vuetify.breakpoint.smAndUp')
    v-btn(
      v-show='goToTop',
      v-scroll='onScroll',
      color='primary',
      dark,
      fixed,
      bottom,
      right,
      fab,
      @click='toTop'
    )
      v-icon {{ mdiArrowUpBoldOutline }}

  lazy-s-cookie-box
  notifications(group='translation', position='bottom right')
  notifications(group='copy-to-clipboard', position='top center')
  notifications(group='case-switch-dates', position='top right')
  notifications(group='skillset-item', position='bottom center')
</template>

<script>
import {
  mdiSortVariant,
  mdiSegment,
  mdiArrowUpBoldOutline,
  mdiCogOutline,
  mdiTranslate,
  mdiArrowExpandHorizontal,
  mdiArrowCollapseHorizontal,
  mdiTableColumnPlusBefore,
  mdiTableColumnPlusAfter,
  mdiTableRow,
  mdiTableRowRemove,
} from '@mdi/js'

export default {
  data() {
    return {
      windowSizeX: 0,
      clipped: false,
      drawer: this.drawerShow(),
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      rightPosition: 1,
      mdiSortVariant,
      mdiSegment,
      goToTop: false,
      mdiArrowUpBoldOutline,
      mdiCogOutline,
      mdiTranslate,
      mdiArrowExpandHorizontal,
      mdiArrowCollapseHorizontal,
      mdiTableColumnPlusBefore,
      mdiTableColumnPlusAfter,
      mdiTableRow,
      mdiTableRowRemove,
      navbar: [],
    }
  },
  async fetch() {
    this.navbar = await this.$content(
      `${this.$i18n.locale}/navbar/side`
    ).fetch()
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('app.meta.title'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('app.meta.description'),
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('app.meta.title'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('app.meta.description'),
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: this.$i18n.t('author.name'),
        },

        ...i18nSeo.meta,
      ],
    }
  },
  mounted() {
    this.windowX()
  },
  methods: {
    refresh() {
      this.$fetch()
    },
    windowX() {
      this.windowSizeX = window.innerWidth
    },
    drawerShow() {
      if (this.windowSizeX > 1024) {
        return true
      } else {
        return false
      }
    },
    noTranslation() {
      this.$notify({
        group: 'translation',
        type: 'warn',
        title: 'Attention!',
        duration: 6000,
        text:
          'Some pages may not be translated into this language. We are working on this and will try to translate as soon as possible.',
      })
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.goToTop || 0
      this.goToTop = top > 50
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>
