<template lang="pug">
v-container
  v-row
    v-col(cols='12')
      v-card.pa-4(flat, color='transparent')
        v-card.mb-2(color='primary')
          v-card-title.py-1 primary
        v-card.mb-2(color='secondary')
          v-card-title.py-1 secondary
        v-card.mb-2(color='accent')
          v-card-title.py-1 accent
        v-card.mb-2(color='info')
          v-card-title.py-1 info
        v-card.mb-2(color='success')
          v-card-title.py-1 success
        v-card.mb-2(color='warning')
          v-card-title.py-1 warning
        v-card.mb-2(color='error')
          v-card-title.py-1 error
        .d-flex.justify-space-around.flex-wrap
          v-sheet.ma-8.rounded.shadow-xs(min-width='100', height=100)
          v-sheet.ma-8.rounded.shadow-sm(min-width='100', height=100)
          v-sheet.ma-8.rounded.shadow-md(min-width='100', height=100)
          v-sheet.ma-8.rounded.shadow-lg(min-width='100', height=100)
          v-sheet.ma-8.rounded.shadow-xl(min-width='100', height=100)

        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quasi necessitatibus veniam modi quas labore a ea, nihil inventore assumenda eius voluptatum maxime porro non sequi temporibus iure rerum velit.
</template>

<script>
export default {
  // layout: 'clean',
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
