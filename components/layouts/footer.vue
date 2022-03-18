<template lang="pug">
v-footer.layout__footer.pa-0(color='transparent')
  v-card.fill-width(flat, tile)
    v-row(no-gutters)
      v-col(cols='12', md='6', :class='leftPos')
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
      v-col(cols='12', md='6', :class='rightPos')
        v-card-text.py-2.d-flex.justify-center.justify-md-end
          lazy-s-social-icons.d-flex.flex-wrap.justify-center.d-sm-block(plain)
  lazy-s-layout-footer-color(:class='leftPos')
</template>

<script>
import { mdiHeart, mdiOpenInNew } from '@mdi/js'

export default {
  name: 'LayoutFooter',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
    drawer: {
      type: Boolean,
      default: true,
    },
    rightDrawer: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    mdiHeart,
    mdiOpenInNew,
    now: new Date().getFullYear(),
  }),
  computed: {
    leftPos() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        if (this.drawer && this.position === 1) {
          if (this.miniVariant) {
            return 'pl-56'
          } else {
            return 'pl-255'
          }
        }

        if (this.position === 0 && this.rightDrawer) {
          return 'pl-300'
        } else {
          return null
        }
      } else {
        return null
      }
    },
    rightPos() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        if (this.rightDrawer && this.position === 1) {
          return 'pr-300'
        }

        if (this.position === 0 && this.drawer) {
          return 'pr-255'
        } else {
          return null
        }
      } else {
        return null
      }
    },
  },
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

    .pr-255 {
      padding-right: 255px;
      padding-left: 0;
    }

    .pl-255 {
      padding-right: 0;
      padding-left: 255px;
    }

    .pl-56 {
      padding-right: 0;
      padding-left: 56px;
    }

    .pr-300 {
      padding-right: 300px;
      padding-left: 0;
    }

    .pl-300 {
      padding-right: 0;
      padding-left: 300px;
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
