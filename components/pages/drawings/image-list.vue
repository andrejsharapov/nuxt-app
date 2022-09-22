<template lang="pug">
v-row.image-list
  v-col(
    v-for='(item, index) of items',
    :key='index',
    cols='12',
    :md='item.grid'
  )
    v-card.pa-2.rounded-lg(v-box-shadow='9')
      v-img.rounded-lg(:src='"/src/drawings/" + (index + 1) + ".jpg"', alt='')
      v-card-subtitle.text-center {{ item.date }}
</template>

<script>
export default {
  name: 'ImageList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
