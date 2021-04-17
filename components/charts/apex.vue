<template>
  <VueApexCharts
    width="100%"
    :options="counters.chartOptions"
    :series="counters.chartSeries"
    :height="counters.chartOptions.height"
  />
</template>

<script>
export default {
  name: 'ChartApex',
  components: {
    VueApexCharts: () => import('vue-apexcharts'),
  },
  props: {
    counters: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
