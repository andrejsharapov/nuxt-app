<template lang="pug">
.page__contact
  s-layout-components-back-image(:page='page')

  s-history-back
  v-container
    v-row
      v-col(cols='12')
        v-card
          v-card-title Hello!
</template>

<script>
import { contact } from '~/lib/page-meta'

export default {
  data() {
    return {
      page: contact(this),
    }
  },
  head() {
    return {
      title: this.page.title,
      titleTemplate: `%s · ${this.$t('author.name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>

<style>
.page__contact {
  --stop-color-one: var(--v-accent-lighten1);
  --stop-color-two: var(--v-success-lighten3);
}
</style>
