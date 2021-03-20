<template lang="pug">
.social-icons
  v-btn.mx-4.my-2.mx-sm-1.my-sm-auto.social-icons__btn(
    v-for='{ title, icon, to, index } of icons',
    :key='index',
    icon,
    :data-title='title',
    :href='to',
    target='_blank',
    rel='noopener noreferrer'
  )
    v-icon(v-text='icon')
</template>

<script>
export default {
  name: 'SocialIcons',
  data() {
    return {
      social: [],
    }
  },
  async fetch() {
    this.social = await this.$content('social').only('social').fetch()
  },
  computed: {
    icons() {
      return this.social?.social
    },
  },
}
</script>
