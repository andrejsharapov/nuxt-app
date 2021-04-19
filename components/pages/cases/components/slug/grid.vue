<template lang="pug">
.case-grid
  v-card-actions.align-start
    v-divider(vertical, color='var(--pink)')
    v-divider.mt-4(color='var(--pink)')
    v-card-title.py-0.pink--text.text--darken-4 {{ grid.size }}
    v-divider.mt-4(color='var(--pink)')
    v-divider(vertical, color='var(--pink)')
  .mx-auto.d-flex.justify-space-around
    v-sheet.d-flex.align-center.justify-center(
      v-for='(g, i) in grid.cols',
      :key='i',
      :width='grid.width',
      height='200',
      color='grey lighten-2'
    )
      v-card-subtitle {{ i + 1 }}
</template>

<script>
export default {
  name: 'CaseGrid',
  props: {
    grid: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
