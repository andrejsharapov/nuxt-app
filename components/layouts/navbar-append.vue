<template lang="pug">
v-row.ma-0.pa-2.navbar__append
  //- 1
  v-col.py-0.text-center
    v-menu(
      offset-y,
      top,
      :close-on-click='false',
      content-class='shadow-base',
      transition='slide-y-reverse-transition'
    )
      template(#activator='{ on: menu }')
        v-btn(icon, v-on='menu', @click.stop='fab = !fab')
          v-icon {{ mdiCogOutline }}

      v-list(dense, nav)
        v-list-item-group(multiple, color='accent')
          //- btn 3
          .mb-1
            lazy-s-lang-switcher(v-if='miniVariant')

          //- btn 4
          lazy-s-color-mode-picker(v-if='miniVariant')

          //- btn 1
          v-list-item.mb-1(@click.stop='goClipped')
            v-list-item-icon
              v-icon {{ mdiApplication }}
            v-list-item-content
              v-list-item-title {{ $t("site.header.name") }}

          //- btn 2
          v-list-item(@click.stop='goMini')
            v-list-item-icon
              v-icon {{ miniVariant ? mdiArrowExpandHorizontal : mdiArrowCollapseHorizontal }}
            v-list-item-content
              v-list-item-title {{ $t("site.navbar.name") }}

  //- 2
  v-col.py-0.text-center(v-if='!miniVariant')
    v-btn(
      text,
      v-for='locale in availableLocales',
      :key='locale.code',
      @click.stop='$i18n.setLocale(locale.code)'
    )
      v-icon(left) {{ mdiTranslate }}
      | {{ locale.name }}

  //- 3
  v-col.py-0.text-center(v-if='!miniVariant')
    v-btn(icon, @click.stop='$vuetify.theme.dark = !$vuetify.theme.dark')
      v-icon {{ $vuetify.theme.dark ? mdiWhiteBalanceSunny : mdiWeatherNight }}
</template>

<script>
import {
  mdiCogOutline,
  mdiApplication,
  mdiArrowExpandHorizontal,
  mdiArrowCollapseHorizontal,
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
  mdiTranslate,
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
      mdiWhiteBalanceSunny,
      mdiWeatherNight,
      mdiTranslate,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
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
