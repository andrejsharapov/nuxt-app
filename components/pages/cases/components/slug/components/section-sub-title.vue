<template lang="pug">
.case-section-sub-title.mt-6.mb-2.d-flex.align-center
  h3.font-weight-bold.text-no-wrap {{ title }}
  v-divider(inset)
</template>

<script>
export default {
  name: 'CaseSectionSubTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
