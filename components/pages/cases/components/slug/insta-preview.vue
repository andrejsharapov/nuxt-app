<template lang="pug">
v-card.case-insta-preview(v-box-shadow='12')
  v-card(
    flat,
    v-if='preview.done.img !== null',
    :height='preview.done.img.height ? preview.done.img.height : $vuetify.breakpoint.sm ? "550" : $vuetify.breakpoint.md ? "430" : $vuetify.breakpoint.lgAndUp ? "515" : "360"'
  )
    iframe.fill-height(
      :src='"https://instagram.com/p/" + preview.done.img.src + "/embed"',
      width='100%',
      frameborder='0',
      scrolling='no',
      allowtransparency='true'
    )
  v-img.mt-md-8(v-else, :src='preview.img.src', alt='', cover)
</template>

<script>
export default {
  name: 'CaseInstaPreview',
  props: {
    preview: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
