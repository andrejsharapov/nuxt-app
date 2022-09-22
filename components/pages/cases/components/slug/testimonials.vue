<template lang="pug">
- var size = 118
.case-testimonials.my-4
  v-card.pt-3.pb-4.px-md-4(v-box-shadow='9')
    v-list-item.flex-column.flex-sm-row
      v-list-item-content.flex-column.flex-sm-row
        .overline.mb-6
          v-chip(
            :href='info.testimonials.author.link ? info.testimonials.author.link : "#"',
            outlined,
            label,
            target='_blank',
            rel='noopener noreferrer'
          )
            span.small {{ info.testimonials.author.company }}
        v-list-item-title {{ info.testimonials.author.name }}
        v-list-item-subtitle {{ info.testimonials.author.position }}

      v-list-item-avatar.rounded-lg(tile, size=size, color='grey lighten-2')
        v-img(:src='info.client.logoJPG', alt='', cover)

    .blockquote.mb-0
      q {{ info.testimonials.message }}
</template>

<script>
export default {
  name: 'CaseTestimonials',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
