<template lang="pug">
v-app
  //- SECTION[epic='layout'] navbar
  v-navigation-drawer.layout__navbar(
    v-model='drawer',
    :mini-variant='miniVariant',
    :clipped='clipped',
    fixed,
    floating,
    app
  )
    template(#prepend, min-height='67')
      layout-navbar-prepend(v-if='!clipped', :clipped='clipped')
  //- !SECTION

  //- SECTION[epic='layout'] header
  v-app-bar(:clipped-left='clipped', fixed, app)
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
    v-btn(icon, @click.stop='miniVariant = !miniVariant')
      v-icon mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}
    v-btn(icon, @click.stop='clipped = !clipped')
      v-icon mdi-application
    v-btn(icon, @click.stop='fixed = !fixed')
      v-icon mdi-minus
    v-toolbar-title(v-text='title')
    v-spacer
    v-btn(icon, @click.stop='rightDrawer = !rightDrawer')
      v-icon mdi-menu
  //- !SECTION

  //- SECTION[epic='layout'] main
  v-main
    nuxt
  //- !SECTION

  //- SECTION[epic='layout'] navbar-right
  v-navigation-drawer(v-model='rightDrawer', :right='right', temporary, fixed)
    v-list
      v-list-item(@click.native='right = !right')
        v-list-item-action
          v-icon(light) mdi-repeat

        v-list-item-title Switch drawer (click me)
  //- !SECTION

  //- SECTION[epic='layout'] footer
  v-footer(:absolute='!fixed', app)
    span &copy; {{ new Date().getFullYear() }}
  //- !SECTION

  notifications(group='translation')
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
