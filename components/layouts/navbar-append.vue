<template lang="pug">
div
  v-divider
  .navbar__append.d-flex.flex-column.pa-2
    //- #1
    v-menu(
      offset-x,
      right,
      :close-on-click='false',
      content-class='shadow-base',
      transition='slide-y-reverse-transition'
    )
      template(#activator='{ on: menu }')
        v-btn(icon, v-on='menu', @click.stop='fab = !fab')
          v-icon {{ mdiCogOutline }}

      v-list(dense, nav)
        v-list-item-group(multiple, color='accent')
          //- btn #1
          v-list-item(@click.stop='goClipped')
            v-list-item-icon
              v-icon {{ mdiApplication }}
            v-list-item-content
              v-list-item-title {{ $t("site.header.name") }}

          //- btn #2
          v-list-item(@click.stop='goMini')
            v-list-item-icon
              v-icon {{ miniVariant ? mdiArrowExpandHorizontal : mdiArrowCollapseHorizontal }}
            v-list-item-content
              v-list-item-title {{ $t("site.navbar.name") }}

          //- btn #3
          lazy-s-lang-switcher

          //- btn #4
          lazy-s-color-mode-picker
    //- #2
    v-spacer
</template>

<script>
import {
  mdiCogOutline,
  mdiApplication,
  mdiArrowExpandHorizontal,
  mdiArrowCollapseHorizontal,
} from '@mdi/js'

export default {
  name: 'NavbarAppend',
  props: {
    clipped: {
      type: Boolean,
      default: false,
    },
    drawer: {
      type: Boolean,
      default: true,
    },
    miniVariant: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fab: false,
      mini: this.miniVariant,
      clip: this.clipped,
      dialog: false,
      mdiCogOutline,
      mdiApplication,
      mdiArrowExpandHorizontal,
      mdiArrowCollapseHorizontal,
    }
  },
  methods: {
    goMini() {
      this.mini = !this.mini
      this.$emit('go-mini', { mini: this.mini })
    },
    goClipped() {
      this.clip = !this.clip
      this.$emit('go-clipped', { clip: this.clip })
    },
  },
}
</script>
