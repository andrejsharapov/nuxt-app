<template lang="pug">
div
  v-list-item-group.d-flex(color='accent')
    v-list-item(
      v-for='{ color, icon } of schemes',
      :key='color',
      icon,
      @click='$colorMode.preference = color'
    )
      v-icon {{ icon }}
</template>

<script>
import {
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
  mdiThemeLightDark,
} from '@mdi/js'

export default {
  name: 'ColorModePicker',
  data() {
    return {
      schemes: [
        { color: 'system', icon: mdiThemeLightDark },
        { color: 'light', icon: mdiWhiteBalanceSunny },
        { color: 'dark', icon: mdiWeatherNight },
      ],
    }
  },
}
</script>
