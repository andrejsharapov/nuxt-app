<template lang="pug">
.card-items.fill-height
  v-card.fill-height.pa-2.d-flex.flex-column.rounded-lg(v-box-shadow='6')
    .flex-grow-1
      v-img.fill-height.rounded-lg(
        v-if='!cardView && item.original',
        :src='item.original.src',
        :alt='item.original.alt'
      )
      v-img.fill-height.rounded-lg(
        v-if='cardView',
        :src='item.img.src',
        :alt='item.img.alt'
      )

    v-card-actions.pt-4.flex-shrink-0.d-flex.justify-center.align-center
      | {{ sketchMessage() }}
      v-switch.mx-4.my-0(
        v-model='cardView',
        :disabled='!item.original.src',
        hide-details
      )
      | {{ illMessage() }}
      v-spacer
      v-chip.ml-2(
        v-for='chip of item.tools',
        :key='chip',
        label,
        outlined,
        :filter-icon='mdiNumeric1Box',
        active-class='indigo white--text'
      ) {{ chip }}

    v-card-actions.flex-shrink-0.justify-space-between
      v-card-subtitle.pa-0 {{ formatDate(item.date) }}
      v-spacer
      v-card-subtitle.pa-0
        v-btn(
          v-for='(name, value) of item.links',
          :key='name',
          :href='name',
          :disabled='!name',
          icon,
          target='_blank',
          rel='noopener noreferrer'
        )
          v-icon {{ linkIcons(value) }}
</template>

<script>
import { mdiNumeric1Box } from '@mdi/js'

export default {
  name: 'CardItems',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    preview: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cardView: this.preview,
      mdiNumeric1Box,
    }
  },
  methods: {
    linkIcons(value) {
      if (value === 'dribbble') {
        return `$dribbbleOutline`
      } else if (value === 'instagram') {
        return `$instagramOutline`
      }
    },
    sketchMessage() {
      if (this.$i18n.locale === 'ru') {
        return 'Эскиз'
      } else if (this.$i18n.locale === 'en') {
        return 'Sketch'
      }
    },
    illMessage() {
      if (this.$i18n.locale === 'ru') {
        return 'Иллюстрация'
      } else if (this.$i18n.locale === 'en') {
        return 'Illustration'
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>
