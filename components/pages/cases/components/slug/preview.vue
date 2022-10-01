<template lang="pug">
v-expansion-panels.case-preview(v-box-shadow='43', flat)
  v-expansion-panel
    v-expansion-panel-header.py-8
      span.font-weight-bold.primary--text.d-flex.align-center
        | {{ $tc("btn.view", 0) }}
        v-icon(right, color='primary') {{ mdiGestureTap }}
    v-expansion-panel-content.pa-0
      v-card(flat, v-if='preview.img.src !== null')
        v-img.fill-height(
          :src='preview.img.src',
          width='100%',
          :aspect-ratio='16 / 9',
          cover
        )
</template>

<script>
import { mdiGestureTap } from '@mdi/js'

export default {
  name: 'CasePreview',
  props: {
    preview: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    mdiGestureTap,
  }),
}
</script>
