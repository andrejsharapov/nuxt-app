<template lang="pug">
.color-mode-picker
  v-list-item-group.d-flex(multiple, color='accent')
    v-list-item.color-mode-picker__item(
      v-for='{ color, icon } of schemes',
      :key='color',
      icon,
      @click='$colorMode.preference = color'
    )
      v-icon(size='24') {{ icon }}
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
        { color: 'light', icon: mdiWhiteBalanceSunny },
        { color: 'system', icon: mdiThemeLightDark },
        { color: 'dark', icon: mdiWeatherNight },
      ],
    }
  },
}
</script>

<style scoped lang="postcss">
.color-mode-picker {
  &__item {
    min-width: 2.75rem;
    height: 2.75rem;
    justify-content: center;

    &:first-child,
    &:last-child {
      flex-basis: 0;
    }

    &:first-child {
      margin-left: 0 !important;
      justify-content: center;
    }

    &:not(:first-child),
    &:not(:last-child) {
      margin-right: 0.25rem;
      margin-left: 0.25rem;
    }

    &:last-child {
      margin-right: 0;
      justify-content: flex-end;
    }
  }
}
</style>
