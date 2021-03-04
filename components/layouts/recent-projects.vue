<template lang="pug">
.recent-projects
  v-menu(
    transition='scroll-y-reverse-transition',
    max-width='460',
    offset-y,
    nudge-bottom='12',
    content-class='shadow-lg'
  )
    template(#activator='{ on: menu }')
      v-btn.mx-2(icon, v-on='{ ...menu }')
        v-badge(left, overlap, content='0', color='red darken-3')
          v-icon {{ mdiBellRingOutline }}
    v-list
      v-subheader {{ $t("projects.recent") }}
      v-divider(inset)
      v-list-item-group
        v-list-item(exact)
          v-list-item-title {{ $t("projects.not-found") }}
</template>

<script>
import { mdiBellRingOutline } from '@mdi/js'

export default {
  name: 'RecentProjects',
  data() {
    return {
      mdiBellRingOutline,
    }
  },
}
</script>
