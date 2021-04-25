<template lang="pug">
v-row.des-site-experience
  v-col.d-none.d-sm-block(cols='2', md='1')
    v-avatar(tile, size='62')
      v-img(:src='item.img.src', :alt='item.title')
  v-col(cols='10', md='4')
    h3 {{ item.title }}
    h6.subtitle-2.font-weight-regular {{ $tc("pages.des-site.experience", 2) }} {{ item.title }}
  v-col.d-flex.align-center.justify-center(cols='12', md='7')
    v-progress-linear.cursor-pointer(
      v-model='item.percent',
      rounded,
      height='25',
      color='pink'
    )
      strong {{ Math.ceil(item.percent) }}
</template>

<script>
export default {
  name: 'DesSiteExperience',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
