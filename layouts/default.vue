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
      s-layout-navbar-prepend(v-if='!clipped')
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
      v-if='$vuetify.breakpoint.smAndUp && !drawer'
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
    nuxt
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
