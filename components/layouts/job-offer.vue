<template lang="pug">
.job-offer
  v-badge(
    bordered,
    bottom,
    dot,
    label='offer',
    offset-x='20',
    offset-y='20',
    :color='$t("author.job.status") === "1" ? "success" : "grey darken-2"'
  )
    v-hover(v-slot='{ hover }')
      v-avatar
        v-tooltip(left)
          template(#activator='{ on: email }')
            v-btn(
              icon,
              :disabled='$t("author.job.status") !== "1"',
              :title='$t("author.job.title")',
              href='mailto:an.sharapov90@gmail.com?subject=Предлагаем работу',
              rel='noopener noreferrer',
              v-on='email'
            ) 
              v-icon {{ hover ? mdiEmailOutline : mdiAccountCircleOutline }}
          span {{ $t("author.job.title") }}
</template>

<script>
import { mdiAccountCircleOutline, mdiEmailOutline } from '@mdi/js'

export default {
  name: 'JobOffer',
  data: () => ({
    mdiAccountCircleOutline,
    mdiEmailOutline,
  }),
}
</script>
