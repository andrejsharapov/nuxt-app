<template lang="pug">
h2.section-heading-anchor.mb-4.text-h5.text-md-h4.anchor-link.font-weight-bold.primary--text(
  :id='anchor'
)
  | {{ title }}
  //- nuxt-link.ml-2(:to='$nuxt.$route.path + "#" + anchor') #
  nuxt-link.ml-2(:to='{ path: $nuxt.$route.path, hash: "#" + anchor }') #
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
