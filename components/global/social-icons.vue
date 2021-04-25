<template lang="pug">
.social-icons.text-center
  v-btn.mx-4.my-2.mx-sm-1.my-sm-auto.social-icons__btn(
    v-for='{ title, icon, to, index } of icons',
    :key='index',
    :class='classColor',
    icon,
    :plain='plain',
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
  props: {
    classColor: {
      type: String,
      default: null,
    },
    plain: {
      type: Boolean,
      default: false,
    },
  },
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
