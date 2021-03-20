<template lang="pug">
v-container
  v-row
    v-col(cols='12')
      v-card.pa-4
        .d-flex.justify-space-around
          v-sheet.ma-8.rounded.shadow-xs(width='100', height=100)
          v-sheet.ma-8.rounded.shadow-sm(width='100', height=100)
          v-sheet.ma-8.rounded.shadow-md(width='100', height=100)
          v-sheet.ma-8.rounded.shadow-lg(width='100', height=100)
          v-sheet.ma-8.rounded.shadow-xl(width='100', height=100)
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quasi necessitatibus veniam modi quas labore a ea, nihil inventore assumenda eius voluptatum maxime porro non sequi temporibus iure rerum velit.
</template>

<script>
export default {
  layout: 'clean',
  head() {
    return {
      titleTemplate: '',
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
