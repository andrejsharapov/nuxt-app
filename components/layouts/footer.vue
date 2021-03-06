<template lang="pug">
- var five = [1, 2, 3, 4, 5]
v-footer.layout__footer.py-0(
  :style='$vuetify.breakpoint.lgAndUp && drawer ? (!miniVariant && $vuetify.breakpoint.lgAndUp ? "padding-left: 255px; padding-right: 0;" : "padding-left: 56px; padding-right: 0;") : "padding: 0"',
  color='transparent'
)
  v-card.fill-width(flat, tile, color='transparent')
    v-row(no-gutters)
      v-col(cols='12', md='6')
        v-card-text.py-2.text-center.text-sm-left Copyright &copy; 2016 - {{ now }} · with&nbsp;
          v-icon.heart(color='pink', size='18') {{ mdiHeart }}
          | &nbsp;
          a.d-inline-flex.align-center(
            href='https://twitter.com/andrejsharapov',
            target='_blank',
            rel='noopener noreferrer',
            title=''
          ) @andrejsharapov
            v-icon(right, color='primary', small) {{ mdiOpenInNew }}
      v-col.d-flex.justify-end(cols='12', md='6')
        v-card-text.py-2.d-flex.justify-center.justify-sm-end
          //- TEST
          lazy-s-social-icons
  //- COMPONENT COLOS (ALERT)
  s-layout-footer-color
  //- /COMPONENT
</template>

<script>
import { mdiHeart, mdiOpenInNew } from '@mdi/js'

export default {
  name: 'Footer',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
    drawer: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    mdiHeart,
    mdiOpenInNew,
    now: new Date().getFullYear(),
  }),
}
</script>

<style scoped lang="scss">
.layout__footer {
  transition: all 0.2s var(--cubic-default) forwards;

  .v-card {
    background-color: var(--light);
  }

  .heart {
    display: inline-block;
    animation: heart calc(var(--base-time) * 4) var(--cubic) infinite;
  }
}

@keyframes heart {
  49% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(0.5);
  }
}
</style>
