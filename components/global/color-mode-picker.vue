<template lang="pug">
v-list-item-group.row.row--dense.mx-0(
  v-model='themeActive',
  mandatory,
  active-class='primary white--text'
)
  v-row.ma-0(dense)
    v-col(cols='6')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click='lightTheme'
      )
        .text-body-2.font-weight-medium {{ $t("app.themes.light") }}
        v-icon.ml-2

    v-col(cols='6')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click='darkTheme'
      )
        .text-body-2.font-weight-medium {{ $t("app.themes.dark") }}
        v-icon.ml-2

    v-col(cols='12')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click='systemTheme'
      )
        .text-body-2.font-weight-medium {{ $t("app.themes.system") }}
        v-icon.ml-2 {{ mdiDesktopClassic }}
</template>

<script>
import {
  // mdiWhiteBalanceSunny,
  // mdiWeatherNight,
  // mdiThemeLightDark,
  mdiWeatherPartlyCloudy,
  mdiWeatherNightPartlyCloudy,
  mdiDesktopClassic,
} from '@mdi/js'

export default {
  name: 'ColorModePicker',
  data() {
    return {
      mdiWeatherPartlyCloudy,
      mdiWeatherNightPartlyCloudy,
      mdiDesktopClassic,
      themeActive: 2,
    }
  },
  mounted() {
    const theme = localStorage.getItem('darkMode')

    if (theme) {
      if (theme === 'true') {
        setTimeout(() => {
          this.$vuetify.theme.dark = true
          this.themeActive = 1
        }, 0)
      } else {
        setTimeout(() => {
          this.$vuetify.theme.dark = false
          this.themeActive = 0
        }, 0)
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTimeout(() => {
        this.$vuetify.theme.dark = true
        this.themeActive = 2
      }, 0)
    }
  },
  methods: {
    lightTheme() {
      this.$vuetify.theme.dark = false
      localStorage.setItem('darkMode', this.$vuetify.theme.dark.toString())
    },
    darkTheme() {
      this.$vuetify.theme.dark = true
      localStorage.setItem('darkMode', this.$vuetify.theme.dark.toString())
    },
    systemTheme() {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTimeout(() => {
          this.$vuetify.theme.dark = true
          localStorage.setItem('darkMode', this.$vuetify.theme.dark.toString())
        }, 0)
      } else {
        this.$vuetify.theme.dark = false
        localStorage.setItem('darkMode', this.$vuetify.theme.dark.toString())
      }

      this.themeActive = 2
    },
  },
}
</script>
