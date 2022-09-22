<template lang="pug">
.case-analytics
  v-list(color='transparent')
    v-list-item(
      v-for='(item, index) in Array.isArray(info.result) ? info.result : [info.result]',
      :key='index'
    )
      v-list-item-icon
        v-icon(color='success') {{ mdiClipboardCheckOutline }}
      v-list-item-content
        v-list-item-title.text-wrap(v-text='item')

  v-row
    //- SECTION
    v-col(
      v-if='info.traffic.show',
      cols='12',
      :md='info.conversion.show || info.goals.show ? "7" : "12"'
    )
      v-card.fill-height.pa-4(v-box-shadow='9')
        v-card-title.pt-0 {{ info.traffic.title }}
        //- COMPONENT bar - traffic
        lazy-s-chart-apex(:counters='chartTraffic')
        //- !COMPONENT
    //- !SECTION

    //- SECTION
    v-col(
      v-if='info.conversion.show || info.goals.show',
      cols='12',
      :md='(info.conversion.show && !info.goals.show) || (!info.conversion.show && info.goals.show) ? "5" : "12"',
      :class='{ "d-flex flex-column flex-md-row": info.conversion.show && info.goals.show }'
    )
      //- COMPONENT conversion
      v-card.fill-height.pa-4(
        v-if='info.conversion.show',
        v-box-shadow='9',
        :class='{ "cols-12 col-md-5 ml-md-0 mr-md-auto": info.conversion.show && info.goals.show }'
      )
        v-card-title.pt-0 {{ info.conversion.title }}
        lazy-s-chart-apex(:counters='chartConversion')
      //- !COMPONENT

      //- COMPONENT goals
      v-card.fill-height.pa-4(
        v-if='info.goals.show',
        v-box-shadow='9',
        :class='{ "cols-12 col-md-5 offset-md-1 mt-4 mt-md-0": info.conversion.show && info.goals.show }'
      )
        v-card-title.pt-0 {{ info.goals.title }}
        lazy-s-chart-apex(:counters='chartGoals')
      //- !COMPONENT
    //- !SECTION
</template>

<script>
import { mdiClipboardCheckOutline } from '@mdi/js'

export default {
  name: 'CaseAnalytics',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      mdiClipboardCheckOutline,
      chartTraffic: {
        chartSeries: this.info.traffic.series,
        chartOptions: {
          height: 300,
          chart: {
            type: this.info.traffic.type,
            toolbar: {
              tools: {
                download: false,
                zoomin: false,
                zoomout: false,
              },
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '70%',
              // endingShape: 'rounded',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            // width: 22,
            // colors: ['transparent'],
          },
          fill: {
            opacity: 1,
          },
          xaxis: {
            categories: [],
            labels: {
              show: false,
            },
          },
          yaxis: {
            show: false,
            // },
            // tooltip: {
            //   enable: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
      chartConversion: {
        chartSeries: this.info.conversion.value,
        chartOptions: {
          height: 290,
          chart: {
            type: 'radialBar',
            sparkline: {
              enabled: true,
            },
          },
          responsive: [
            {
              breakpoint: 768,
              options: {
                chart: {
                  height: 480,
                },
              },
            },
            {
              breakpoint: 375,
              options: {
                chart: {
                  height: 320,
                },
              },
            },
          ],
          plotOptions: {
            radialBar: {
              // startAngle: -45,
              // endAngle: 45,
              hollow: {
                size: '50%',
              },
              // track: {
              //   margin: 5,
              // },
              dataLabels: {
                name: {
                  show: true,
                  color: 'var(--secondary)',
                  fontSize: '1rem',
                },
                value: {
                  // offsetY: -50,
                  fontSize: '2rem',
                },
              },
            },
          },
          labels: [this.info.conversion.title],
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
      chartGoals: {
        chartSeries: this.info.goals.chart.series,
        chartOptions: {
          height: 290,
          chart: {
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              // offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                // margin: 5,
                size: '50%',
                background: 'transparent',
              },
              dataLabels: {
                name: {
                  show: true,
                },
                value: {
                  show: false,
                },
                total: {
                  show: true,
                  label: '',
                },
              },
            },
          },
          track: {
            strokeWidth: 70,
          },
          colors: [
            function ({ value }) {
              if (value <= 10) {
                return 'var(--error)'
              } else if (value <= 40) {
                return 'var(--warning)'
              } else {
                return 'var(--success)'
              }
            },
          ],
          fill: {
            type: 'solid',
            colors: [
              function ({ value }) {
                if (value <= 10) {
                  return 'var(--error)'
                } else if (value <= 40) {
                  return 'var(--warning)'
                } else {
                  return 'var(--success)'
                }
              },
            ],
          },
          labels: this.info.goals.chart.labels,
          legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'left',
            offsetX: 40,
            offsetY: -4,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              size: 0,
            },
            // formatter: (w) => {
            //   return (
            //     w.globals.seriesTotals.reduce((a, b) => {
            //       return a + b
            //     }, 0) /
            //       w.globals.series.length +
            //     '%'
            //   )
            // },
            formatter: (seriesName, opts) => {
              return (
                seriesName +
                ':  ' +
                opts.w.globals.series[opts.seriesIndex] +
                '%'
              )
            },
            itemMargin: {
              vertical: 4,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  show: false,
                },
              },
            },
          ],
        },
      },
    }
  },
}
</script>
