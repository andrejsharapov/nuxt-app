<template lang="pug">
v-list-item-group.row.row--dense.mx-0(
  v-model='themeActive',
  mandatory,
  active-class='primary white--text'
)
  v-row.ma-0(dense)
    v-col(cols='6')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click='setTheme("light")'
      )
        .text-body-2.font-weight-medium {{ $t("app.themes.light") }}
        v-icon.ml-2 {{ mdiWeatherPartlyCloudy }}

    v-col(cols='6')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click='setTheme("dark")'
      )
        .text-body-2.font-weight-medium {{ $t("app.themes.dark") }}
        v-icon.ml-2 {{ mdiWeatherNightPartlyCloudy }}

    v-col(cols='12')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click='setTheme("system")'
      )
        .text-body-2.font-weight-medium {{ $t("app.themes.system") }}
        v-icon.ml-2 {{ mdiDesktopClassic }}
</template>

<script>
import {
  mdiWeatherPartlyCloudy,
  mdiWeatherNightPartlyCloudy,
  mdiDesktopClassic,
} from '@mdi/js'

const STORAGE_KEY = 'color-mode' // 'light' | 'dark' | 'system'
const MODES = { light: 0, dark: 1, system: 2 }

export default {
  name: 'ColorModePicker',
  data() {
    return {
      mdiWeatherPartlyCloudy,
      mdiWeatherNightPartlyCloudy,
      mdiDesktopClassic,
      themeActive: MODES.system,
      mediaQuery: null,
    }
  },
  mounted() {
    const saved = localStorage.getItem(STORAGE_KEY) || 'system'
    this.themeActive = MODES[saved] ?? MODES.system
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    this.mediaQuery.addEventListener('change', this.onSystemChange)
    this.applyTheme(saved)
  },
  beforeDestroy() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.onSystemChange)
    }
  },
  methods: {
    setTheme(mode) {
      // mode: 'light' | 'dark' | 'system'
      localStorage.setItem(STORAGE_KEY, mode)
      this.themeActive = MODES[mode]
      this.applyTheme(mode)
    },
    applyTheme(mode) {
      let isDark
      if (mode === 'dark') isDark = true
      else if (mode === 'light') isDark = false
      else isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      this.$vuetify.theme.dark = isDark
    },
    onSystemChange(e) {
      if (localStorage.getItem(STORAGE_KEY) === 'system') {
        this.$vuetify.theme.dark = e.matches
      }
    },
  },
}
</script>
