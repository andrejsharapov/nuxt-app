<template lang="pug">
.page__contact
  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line(
        absolute,
        right='0',
        bottom='-7',
        left='0',
        :width='null',
        :height='null'
      )

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
  --stop-color-one: #1c2bc6;
  --stop-color-two: var(--v-success-lighten3);
}
</style>
