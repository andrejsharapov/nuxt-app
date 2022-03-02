<template lang="pug">
.page__pricing-index
  s-history-back
  v-container
    v-row
      v-col(cols='12')
        v-card(flat)
          v-card-title
</template>

<script>
export default {
  name: 'PricingIndex',
  layout: 'clean',
  middleware({ redirect, app }) {
    return redirect('301', `/${app.i18n.locale}/`)
  },
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
