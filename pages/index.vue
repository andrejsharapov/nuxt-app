<template>
  <v-row justify="center" align="center" class="base">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-16">
        <h1>Hello</h1>
        <lang-switcher />
        <lazy-color-mode-picker />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel
          quaerat hic repudiandae non exercitationem at
          <a href="#" title=""> ipsum quibusdam placeat </a>
          delectus, accusamus tempora laboriosam maiores consequuntur quisquam
          pariatur eos aliquid. Voluptatem.
        </p>
      </v-card>
    </v-col>
  </v-row>
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
