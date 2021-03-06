<template lang="pug">
v-container
  v-row
    v-col(cols='12')
      v-card.pa-4
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quasi necessitatibus veniam modi quas labore a ea, nihil inventore assumenda eius voluptatum maxime porro non sequi temporibus iure rerum velit.
</template>

<script>
export default {
  layout: 'clean',
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
}
</script>

<style lang="scss">
// .v-card {
//   @include headings(1) {
//     color: red;
//   }
// }
</style>
