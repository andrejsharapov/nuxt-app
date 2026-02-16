<template lang="pug">
.card-model
  v-card.pa-2.rounded-lg(v-box-shadow='9')
    v-img.rounded-lg(
      v-if='item.tools.includes("blockbench")'
      :src='"/src/nuxt-app/modeling/" + item.alt + ".gif"',
      :alt='item.alt'
    )
    lazy-s-pages-modeling-three-d-model-viewer(
      v-else
      :model-path='"/src/nuxt-app/modeling/blender/" + item.alt + ".glb"'
      :fov="item.fov"
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
    item: {
      type: Object,
      default: () => ({}),
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
