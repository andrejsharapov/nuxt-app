<template lang="pug">
.case-responsive-chart
  s-chart-apex(:counters='counters')
</template>

<script>
export default {
  name: 'CaseResponsiveChart',
  props: {
    res: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      counters: {
        chartSeries: [this.res.percent],
        chartOptions: {
          chart: {
            type: 'radialBar',
          },
          responsive: [
            {
              breakpoint: 768,
              options: {
                chart: {
                  height: 500,
                },
              },
            },
            {
              breakpoint: 375,
              options: {
                chart: {
                  height: 370,
                },
              },
            },
          ],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '50%',
              },
              dataLabels: {
                name: {
                  color: 'var(--secondary)',
                  fontSize: '1rem',
                },
                value: {
                  fontSize: '2rem',
                },
              },
            },
          },
          labels: ['Оптимизация'],
          fill: {
            type: 'solid',
            colors: [
              function ({ value }) {
                if (value <= 64) {
                  return 'var(--error)'
                } else if (value <= 78) {
                  return 'var(--warning)'
                } else {
                  return 'var(--success)'
                }
              },
            ],
          },
        },
      },
    }
  },
}
</script>
