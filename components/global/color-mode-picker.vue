<template lang="pug">
v-list-item-group.row.row--dense.mx-0(
  mandatory,
  active-class='primary white--text'
)
  v-row.ma-0(dense)
    v-col(cols='6')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click.stop='$vuetify.theme.dark = false'
      )
        .text-body-2.font-weight-medium {{ $t("app.themes.light") }}
        v-icon.ml-2 {{ mdiWeatherNightPartlyCloudy }}

    v-col(cols='6')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click.stop='$vuetify.theme.dark = true'
      )
        .text-body-2.font-weight-medium {{ $t("app.themes.dark") }}
        v-icon.ml-2 {{ mdiWeatherPartlyCloudy }}
    v-col(cols='12')
      v-list-item.align-center.justify-space-between.rounded.hidden(
        @click.stop='$vuetify.theme.dark = false'
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
      themeActive: 0,
    }
  },
}
</script>
