<template lang="pug">
v-container
  v-row
    v-col(cols='12')
      v-card.pa-4
        markdown 
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quasi necessitatibus veniam modi quas labore a ea, nihil inventore assumenda eius voluptatum maxime porro non sequi temporibus iure rerum velit.
        div(v-html='post')
</template>

<script>
import markdown from '../content/ru/articles/markdown.md'

export default {
  head() {
    return {
      titleTemplate: null,
      title:
        this.$t('author.name') +
        ' · ' +
        this.$t('author.position[0]') +
        ', ' +
        this.$t('author.position[1]'),
    }
  },
  computed: {
    post() {
      return markdown
    },
  },
}
</script>

<style lang="scss">
.v-card {
  @include headings(1) {
    color: red;
  }
}
</style>
