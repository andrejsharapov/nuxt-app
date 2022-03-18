<template lang="pug">
v-timeline.timeline-items.my-4(
  :dense='$vuetify.breakpoint.mdAndDown',
  align-top
)
  v-timeline-item.timeline__item(
    v-for='(l, i) in items',
    :key='i',
    :color='"label--" + l.label',
    :icon='$vuetify.breakpoint.smAndUp ? viewColors(l.label) : ""',
    :small='$vuetify.breakpoint.smAndDown',
    :large='$vuetify.breakpoint.lgAndUp',
    dot
  )
    span(slot='opposite') {{ formatDate(l.date) }}
    v-sheet.rounded.shadow-xl
      v-list-item.px-0(three-line)
        v-list-item-content.py-0
          v-card-title.anchor-link.font-weight-bold(:id='l.slug') {{ l.title }}
            nuxt-link.ml-2.d-none.d-sm-inline-block(:to='`#${l.slug}`') #
          v-card-text.pt-0 {{ l.caption }}
          v-card-text(v-if='l.button')
            v-btn.primary--text.py-4(
              text,
              small,
              :href='l.to',
              target='_blank'
            ) {{ l.button }}
              v-icon(right) {{ mdiOpenInNew }}
        v-list-item-avatar.d-none.d-sm-block(tile, width='auto')
          v-chip.v-chip--active.mr-4.not-pointer(
            label,
            dark,
            :color='"label--" + l.label'
          ) {{ l.label }}
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

export default {
  name: 'TimelineItems',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mdiOpenInNew,
    }
  },
  methods: {
    viewColors(item) {
      const labelColor = () => {
        if (item === 'career') {
          return '$mdiChartTimelineVariant'
        } else if (item === 'design') {
          return '$mdiPaletteOutline'
        } else if (item === 'development') {
          return '$mdiDevices'
        } else if (item === 'idea') {
          return '$mdiLightbulbOnOutline'
        } else if (item === 'progress') {
          return '$mdiTrophyAward'
        } else if (item === 'contribution') {
          return '$mdiHandshakeOutline'
        } else if (item === 'other') {
          return '$mdiAccountCheck'
        } else {
          return '$mdiAdjust'
        }
      }
      return labelColor()
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>

<style lang="scss">
$tl: v-timeline;

.timeline {
  &__item {
    .v-chip {
      &--active {
        &::before {
          opacity: 0;
        }
      }
    }

    .v-list-item {
      &__content {
        line-height: 1.375rem;
      }
    }
  }
}

@media (max-width: 576px) {
  .#{$tl}-item {
    &__divider {
      display: none !important;
    }

    &__body {
      max-width: 100% !important;
    }
  }

  .#{$tl} {
    &::before {
      left: calc(50% - 0.0625rem) !important;
    }
  }
}
</style>
