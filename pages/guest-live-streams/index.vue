<template lang="pug">
.page__
  s-history-back
  v-container
    v-row
      v-col(cols='12')
        v-card
          v-card-title Hello!
</template>

<script>
export default {
  name: 'GuestLiveStreamsIndex',
  layout: 'clean',
  data: () => ({
    page: {
      crumbs: '',
      title: '',
      description: '',
    },
  }),
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
/* .page__ {} */
</style>
