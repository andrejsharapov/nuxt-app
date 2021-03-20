<template lang="pug">
v-app
  //- SECTION[epic=layout] navbar
  v-navigation-drawer.layout__navbar(
    v-model='drawer',
    :mini-variant='miniVariant',
    :clipped='clipped',
    fixed,
    floating,
    app
  )
    template(#prepend)
      s-layout-navbar-prepend(v-if='!clipped', :clipped='clipped')
    perfect-scrollbar
      s-layout-navbar-list(:mini-variant='miniVariant')
    template(#append)
      s-layout-navbar-append(
        :clipped='clipped',
        :drawer='drawer',
        :mini-variant='miniVariant',
        @go-clipped='barEvents',
        @go-mini='barEvents'
      )
  //- /SECTION

  //- SECTION[epic=layout] header
  v-app-bar(:clipped-left='clipped', fixed, app)
    s-layout-navbar-prepend.ml-n4(
      v-if='$vuetify.breakpoint.smAndUp && !drawer',
      :clipped='clipped'
    )
    nuxt-link(v-if='$vuetify.breakpoint.xs', :to='localePath("/")')
      img(
        src='~/assets/images/app-logo.svg?data',
        :alt='$t("host.name")',
        width='40',
        height='40'
      )
    nuxt-link(
      v-if='$vuetify.breakpoint.smAndUp && drawer && miniVariant && clipped',
      :to='localePath("/")'
    )
      img(
        src='~/assets/images/app-logo.svg?data',
        :alt='$t("host.name")',
        width='40',
        height='40'
      )
    v-tooltip(right)
      template(#activator='{ on: sidebar }')
        v-btn(icon, v-on='{ ...sidebar }', @click.stop='drawer = !drawer')
          v-icon {{ drawer ? mdiSegment : mdiSortVariant }}
      span {{ $t("site.navbar.name") }}
    v-spacer
    s-layout-job-offer
    s-layout-recent-projects
    //- v-btn(icon, @click.stop='rightDrawer = !rightDrawer')
    //-   v-icon mdi-dots-grid
  //- /SECTION

  //- SECTION[epic=layout] main
  v-main
    v-container
      v-row
        v-col
          .pa-4.fill-height.d-flex.justify-center.align-center.flex-column.text-center
            lazy-s-fish-construction(:width='250', :height='250')
            .h2.text-h6.text-sm-h4.text-lg-h3 {{ $t("site.page.construction") }}
            .d-flex.flex-column.flex-sm-row
              .mt-4.mx-sm-4
                v-btn.shadow-base(
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

  //- SECTION[epic=layout] navbar-right
  v-navigation-drawer(v-model='rightDrawer', :right='right', temporary, fixed)
    v-list
      v-list-item(@click.native='right = !right')
        v-list-item-action
          v-icon(light) mdi-repeat

        v-list-item-title Switch drawer (click me)
  //- /SECTION

  //- SECTION[epic=layout] footer
  s-layout-footer(:mini-variant='miniVariant', :drawer='drawer')
  //- /SECTION

  notifications(group='translation')
</template>

<script>
import { mdiSortVariant, mdiSegment } from '@mdi/js'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      mdiSortVariant,
      mdiSegment,
    }
  },
  methods: {
    barEvents(prop) {
      this.miniVariant = prop.mini
      this.clipped = prop.clip
    },
  },
}
</script>
