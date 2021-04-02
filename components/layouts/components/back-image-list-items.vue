<template lang="pug">
v-row.back-image-list-items.mt-8(no-gutters)
  v-col(cols='12', sm='6')
    v-list-item.px-0.py-2
      v-list-item-icon.my-0
        v-sheet.d-flex.align-center.justify-center.rounded.op-8(
          width='62',
          height='62',
          color='grey lighten-5'
        )
          v-icon(style='color: var(--stop-color-one)') {{ icon }}
      v-list-item-content.py-0
        v-list-item-title.font-weight-medium.white--text.op-8 {{ message }}
        v-list-item-subtitle.text-h4.font-weight-medium.white--text
          AnimatedNumber(:value='contentVal', :duration='duration', :round='1')
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
  name: 'BackImageListItems',
  components: {
    AnimatedNumber,
  },
  props: {
    content: {
      type: Array,
      default: () => [],
    },
    icon: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 5000,
    },
  },
  computed: {
    contentVal() {
      return this.content?.length ? this.content.length : '0'
    },
  },
}
</script>

<style>
.back-image-list-items {
  @media (--md-min) {
    max-width: 85%;
  }
}
</style>
