<template lang="pug">
v-row.back-image-list-grid.mt-8(
  no-gutters,
  :style='$vuetify.breakpoint.mdAndUp ? "max-width: 85%" : ""'
)
  v-col(v-for='item in content', :key='item.slug', cols='12', sm='6')
    v-list-item.px-0.py-2
      v-list-item-icon.my-0
        v-sheet.d-flex.align-center.justify-center.rounded.op-8(
          width='62',
          height='62',
          color='grey lighten-5'
        )
          v-icon(style='color: var(--stop-color-one)') {{ item.icon }}
      v-list-item-content.py-0
        v-list-item-title.font-weight-medium.white--text.text-capitalize.op-8(
          v-text='titleLocale(item)'
        )
        v-list-item-subtitle.text-h4.font-weight-medium.white--text
          animated-number(
            :value='item.figures.length',
            :duration='duration',
            :round='1'
          )
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
  name: 'BackImageListGrid',
  components: {
    AnimatedNumber,
  },
  props: {
    content: {
      type: Array,
      default: () => [],
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
  methods: {
    titleLocale(cert) {
      if (this.$i18n.locale === 'ru') {
        return cert.title
      } else if (this.$i18n.locale === 'en') {
        return cert.slug
      }
    },
  },
}
</script>
