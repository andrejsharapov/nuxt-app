<template lang="pug">
.color-mode-picker.fill-width
  v-list-item-group.d-flex(mandatory, color='primary')
    v-list-item.color-mode-picker__item(
      icon,
      @click.stop='$vuetify.theme.dark = !$vuetify.theme.dark'
    )
      v-list-item-icon
        v-icon {{ $vuetify.theme.dark ? mdiWeatherNight : mdiWhiteBalanceSunny }}
      v-list-item-content
        v-list-item-title {{ $vuetify.theme.dark ? $t("app.themes.dark") : $t("app.themes.light") }}
</template>

<script>
import {
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
  // mdiThemeLightDark,
} from '@mdi/js'

export default {
  name: 'ColorModePicker',
  data() {
    return {
      mdiWhiteBalanceSunny,
      mdiWeatherNight,
    }
  },
}
</script>
