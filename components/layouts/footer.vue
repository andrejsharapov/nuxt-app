<template lang="pug">
v-footer.layout__footer.py-0(
  :style='$vuetify.breakpoint.lgAndUp && drawer ? (!miniVariant && $vuetify.breakpoint.lgAndUp ? "padding-left: 255px; padding-right: 0;" : "padding-left: 56px; padding-right: 0;") : "padding: 0"',
  color='transparent'
)
  v-card.fill-width(flat, tile)
    v-row(no-gutters)
      v-col(cols='12', md='6')
        v-card-text.d-sm-flex.align-center.fill-height.py-2.justify-center.justify-md-start.text-center.text-md-left Copyright &copy; 2016 - {{ now }} · with&nbsp;
          v-icon.heart(color='pink', size='18') {{ mdiHeart }}
          | &nbsp;
          a.d-inline-flex.align-center(
            href='https://twitter.com/andrejsharapov',
            target='_blank',
            rel='noopener noreferrer',
            title=''
          ) @andrejsharapov
            v-icon(right, color='primary', small) {{ mdiOpenInNew }}
      v-col(cols='12', md='6')
        v-card-text.py-2.d-flex.justify-center.justify-md-end
          lazy-s-social-icons(plain)
  lazy-s-layout-footer-color
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
.layout {
  &__footer {
    transition: all 0.2s var(--cubic-default) forwards !important;

    .heart {
      display: inline-block;
      animation: heart calc(var(--base-time) * 4) var(--cubic) infinite;
    }
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
