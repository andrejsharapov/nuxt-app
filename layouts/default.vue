<template lang="pug">
v-app
  v-navigation-drawer(
    v-model='drawer',
    :mini-variant='miniVariant',
    :clipped='clipped',
    fixed,
    app
  )
    v-list
      v-list-item(
        v-for='(item, i) in items',
        :key='i',
        :to='item.to',
        router,
        exact
      )
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text='item.title')
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

  v-main
    nuxt

  v-navigation-drawer(v-model='rightDrawer', :right='right', temporary, fixed)
    v-list
      v-list-item(@click.native='right = !right')
        v-list-item-action
          v-icon(light) mdi-repeat

        v-list-item-title Switch drawer (click me)

  v-footer(:absolute='!fixed', app)
    span &copy; {{ new Date().getFullYear() }}
  notifications(group='translation')
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: this.localePath('/'),
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
