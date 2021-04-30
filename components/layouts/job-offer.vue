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
    v-avatar
      v-tooltip(bottom)
        template(#activator='{ on: email }')
          v-btn(
            icon,
            :href='`mailto:an.sharapov90@gmail.com?subject=${$t("author.job.title")}`',
            rel='noopener noreferrer',
            v-on='email'
          )
            v-icon {{ $t("author.job.status") !== 1 ? mdiBriefcaseVariantOffOutline : mdiBriefcaseVariantOutline }}
        span.text-no-wrap {{ $t("author.job.title") }}
</template>

<script>
import {
  mdiBriefcaseVariantOutline,
  mdiBriefcaseVariantOffOutline,
} from '@mdi/js'

export default {
  name: 'JobOffer',
  data: () => ({
    mdiBriefcaseVariantOutline,
    mdiBriefcaseVariantOffOutline,
  }),
}
</script>
