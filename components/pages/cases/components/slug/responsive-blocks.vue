<template lang="pug">
v-card.responsive-blocks.shadow-sm.pa-4
  .d-md-flex.justify-space-between.align-end
    .text-h4.font-weight-bold {{ name }}%
    span.text-caption.text-capitalize {{ value }}

  v-progress-linear(
    v-model='this.name',
    :color='chartColor',
    height='10',
    rounded,
    stream
  )
</template>

<script>
export default {
  name: 'CaseResponsiveBlocks',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    chartColor() {
      if (this.name <= 64) {
        return 'error'
      } else if (this.name <= 78) {
        return 'warning'
      } else {
        return 'success'
      }
    },
  },
}
</script>
