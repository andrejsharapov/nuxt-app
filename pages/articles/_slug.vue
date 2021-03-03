<template lang="pug">
v-container(fluid)
  v-row
    v-col(cols='12')
      v-card.pa-4(flat)
        nuxt-content(:document='article')
</template>

<script>
export default {
  async asyncData({ $content, app, params }) {
    const article = await $content(`${app.i18n.locale}/articles`, params.slug)
      .only('body')
      .fetch()

    return { article }
  },
}
</script>
