<template lang="pug">
v-container
  v-row
    v-col(cols='12')
      v-card.pa-4
        markdown 
</template>

<script>
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
}
</script>

<style lang="scss">
.v-card {
  @include headings(1) {
    color: red;
  }
}
</style>
