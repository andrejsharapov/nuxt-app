<template lang="pug">
v-row.card-model
  v-col(
    v-for='item of items',
    :key='item.title',
    cols='12',
    :md='item.grid ? item.grid : 6'
  )
    v-card.pa-2.rounded-lg(v-box-shadow='9')
      v-img.rounded-lg(
        :src='"/src/modeling/" + item.alt + ".gif"',
        :alt='item.alt'
      )
      v-card-title {{ item.title }}
      v-card-subtitle {{ formatDate(item.date) }}
      v-card-text {{ localeDescription(item) }}
      v-card-text.d-flex.align-center
        v-icon(left) {{ mdiTagMultipleOutline }}
        v-chip-group
          v-chip(
            v-for='(value, index) in item.tags',
            :key='index',
            draggable,
            label,
            outlined,
            disabled
          ) {{ value }}
        v-spacer
        v-icon(left) {{ mdiWrenchOutline }}
        v-chip-group
          v-chip(
            v-for='(value, index) in item.tools',
            :key='index',
            draggable,
            label,
            outlined,
            disabled
          ) {{ value }}
</template>

<script>
import { mdiTagMultipleOutline, mdiWrenchOutline } from '@mdi/js'

export default {
  name: 'CardModel',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mdiTagMultipleOutline,
      mdiWrenchOutline,
    }
  },
  methods: {
    localeDescription(item) {
      if (this.$i18n.locale === 'ru') {
        return item.descRu
      } else if (this.$i18n.locale === 'en') {
        return item.descEn
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>
