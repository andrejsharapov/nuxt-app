<template lang="pug">
v-container(fluid)
  v-row
    v-col(cols='12')
      .back-image.pa-4.pa-md-8.rounded-xl
        h5.text-uppercase.font-weight-bold.white--text(
          v-if='page.crumbs',
          style='letter-spacing: 4px'
        ) {{ pageCrumbs }}
        h3.text-h5.text-md-h3.font-weight-bold.white--text {{ pageTitle }}
        h2.font-weight-medium.white--text.op-8 {{ pageDesc }}

        .back-image__list-items
          slot(name='list-items')

        .back-image__background(v-if='$vuetify.breakpoint.smAndUp')
          slot(name='back-image')
</template>

<script>
export default {
  name: 'BackImage',
  props: {
    page: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    pageCrumbs() {
      return this.page?.crumbs
    },
    pageTitle() {
      return this.page?.title
    },
    pageDesc() {
      return this.page?.description
    },
  },
}
</script>

<style lang="scss">
.back-image {
  --gradient-default: linear-gradient(
    45deg,
    var(--stop-color-one, var(--primary)) 50%,
    var(--stop-color-two, var(--accent)) 100%
  );

  position: relative;
  min-height: 375px;
  overflow: hidden;
  background-image: var(--gradient-default);

  &__list-items {
    position: relative;
    z-index: 4;
  }
}
</style>
