<template lang="pug">
.skill-slider.hidden
  v-slide-group(:show-arrows='!$vuetify.breakpoint.xs')
    v-slide-item(v-for='item of items', :key='item.alt')
      v-sheet.ma-4.pa-2.d-flex.align-center.justify-center.v-slide-group__content__image.hidden.shadow-md(
        width='128',
        height='128',
        rounded
      )
        v-img(
          :src='`/src/skills/${item.img.src}.svg`',
          :alt='item.img.alt',
          max-width='80',
          max-height='80',
          contain
        )
</template>

<script>
export default {
  name: 'SkillSlider',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss">
.skill-slider {
  .v-slide-group {
    &__content__image {
      .image-cover {
        height: 100%;

        .v-image {
          height: inherit;
        }
      }
    }
  }
}
</style>
