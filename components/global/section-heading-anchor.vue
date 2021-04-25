<template lang="pug">
h2.section-heading-anchor.mb-4.text-h5.text-md-h4.anchor-link.font-weight-bold.primary--text(
  :id='anchor',
  v-html='title'
)
  nuxt-link.ml-2(:to='$nuxt.$route.path + "#" + anchor') #
</template>

<script>
export default {
  name: 'SectionHeadingAnchor',
  props: {
    title: {
      type: String,
      default: '',
    },
    anchor: {
      type: String,
      default: '',
    },
  },
}
</script>
