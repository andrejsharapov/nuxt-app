<template lang="pug">
.navbar__prepend
  v-list-item.pa-2(style='min-width: 256px; max-width: 256px')
    v-list-item-avatar.my-0
      AppLogoColor
    v-list-item-content.py-0
      h3.font-weight-medium.ma-0.text-wo-wrap
        span.text-uppercase.primary--text {{ $t("host.name") }}
      v-card-subtitle.pa-0.grey--text.text-lowercase {{ $t("author.name") }}
</template>

<script>
import AppLogoColor from '~/assets/images/app-logo.svg?inline'

export default {
  name: 'NavbarPrepend',
  components: {
    AppLogoColor,
  },
}
</script>
