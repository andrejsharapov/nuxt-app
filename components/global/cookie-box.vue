<template lang="pug">
vue-if-bot
  cookie-consent.d-flex.flex-column.flex-md-row.pa-3.shadow-md(
    transition='scale-transition'
  )
    template(#message)
      .white--text
        | {{ $t("app.cookie.message") }}&nbsp;
        a.primary--text.text-capitalize(
          href='https://cookiesandyou.com/',
          target='_blank',
          rel='noopener noreferrer'
        )
          | {{ $t("more.details") }}
          v-icon(right, small, color='primary') {{ mdiOpenInNew }}
    template(#button)
      v-btn.btn.btn-info.mt-2.mt-md-0.ml-md-2(
        :block='$vuetify.breakpoint.xs',
        large,
        color='primary'
      )
        | Ok
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

export default {
  name: 'CookieBox',
  components: {
    VueIfBot: () => import('vue-if-bot'),
  },
  data() {
    return {
      mdiOpenInNew,
    }
  },
}
</script>

<style>
.cookie-consent {
  position: fixed;
  right: 0.75rem;
  bottom: 0.75rem;
  left: 0.75rem;

  @media (--sm-max) {
    right: 0.25rem;
    left: 0.25rem;
  }

  z-index: 6;
  max-width: 672px;
  min-height: 48px;
  font-size: 0.825rem;
  border-radius: 0.25rem;
  background-color: var(--dark);
}
</style>
