<template lang="pug">
.works-not-found
  v-row.align-center(no-gutters)
    v-col(cols='12', sm='8')
      h3.text-h6.text-sm-h4.text-lg-h3.text-center.text-sm-left.grey--text.text--lighten-2 {{ message }}

    v-col.text-center(cols='12', sm='4')
      lazy-s-fish-empty-content(width='165', height='199')
</template>

<script>
export default {
  name: 'WorksNotFound',
  props: {
    message: {
      type: String,
      default: '',
    },
  },
}
</script>
