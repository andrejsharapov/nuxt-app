<template lang="pug">
.case-grid
  v-card-actions.align-start
    v-divider(vertical, color='var(--pink)')
    v-divider.mt-4(color='var(--pink)')
    v-card-title.py-0.pink--text {{ grid.size }}
    v-divider.mt-4(color='var(--pink)')
    v-divider(vertical, color='var(--pink)')

  .mx-auto.justify-space-around(:style='layoutGrid')
    v-sheet.position-relative.d-flex.align-center.justify-center.case-grid__column(
      v-for='(g, i) in grid.cols',
      :data-width='grid.width',
      :key='i',
      :width='!grid.gap ? grid.width : ""',
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
  computed: {
    layoutGrid() {
      if (this.grid?.gap) {
        return {
          display: 'grid',
          gridGap: this.grid.gap + 'px',
          gridTemplateColumns: `repeat(${this.grid.cols}, 1fr)`,
        }
      } else {
        return {
          display: 'flex',
        }
      }
    },
  },
}
</script>

<style lang="sass">
.case-grid
  &__column
    &:first-child
      &::after
        content: attr(data-width)
        position: absolute
        right: 0
        bottom: -0.5rem
        left: 0
        height: 0.125rem
        text-align: center
        color: var(--pink)
        font-weight: 500
        border-bottom: 0.125rem solid var(--pink)

      &::before
        content: ''
        position: absolute
        right: 0
        bottom: -0.75rem
        left: 0
        height: 0.75rem
        border-left: 0.125rem solid var(--pink)
        border-right: 0.125rem solid var(--pink)
</style>
