<template>
  <v-row justify="center" align="center" class="base">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-16">
        <h1>Hello</h1>
        <lang-switcher />
        <lazy-color-mode-picker />
        <v-icon>{{ '$vs-code' }}</v-icon>
        <p>
          More 4 years am engaged in the creation of design, layout and
          programming of sites on various CMS and site builders. I like to
          create something new, look for interesting solutions, do the
          impossible with simple code and bring my ideas and client ideas to
          life.
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
