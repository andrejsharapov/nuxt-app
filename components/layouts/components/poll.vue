<template lang="pug">
v-card.poll(color='purple')
  v-card-title.justify-center.white--text {{ $t("poll.title") }}
  v-card-subtitle.purple--text.text--lighten-4 {{ $t("poll.message") }}
  v-dialog(
    v-if='!miniVariant',
    v-model='dialog',
    width='500',
    scrollable,
    content-class='poll__modal'
  )
    template(#activator='{ on: poll }')
      v-btn(block, text, dark, v-on='poll') {{ $t("poll.btn") }}

    v-expansion-panels(v-model='panel', accordion, multiple)
      v-expansion-panel(:readonly='readonly')
        v-expansion-panel-header.py-0.pr-2.pl-0(color='primary')
          template(#default)
            v-toolbar.pa-0(dark, flat, color='transparent')
              v-toolbar-title
                v-icon(left) {{ mdiPoll }}
                | {{ $t("poll.title") }}
              v-spacer
              v-btn(
                icon,
                @click='dialog = false',
                @mousemove='readonly = true',
                @mouseleave='readonly = false'
              )
                v-icon {{ mdiClose }}

          template(#actions)
            v-btn(
              icon,
              width='48',
              height='48',
              :class='{ "d-none": $vuetify.breakpoint.xs }'
            )
              v-icon(color='white') {{ mdiChevronDown }}

        v-expansion-panel-content.pa-0
          v-card(flat, tile, color='white', style='height: 65vh')
            iframe(
              :src='"https://docs.google.com/forms/d/e/" + isLangVersion + "/viewform?embedded=true"',
              width='100%',
              height='100%',
              frameborder='0',
              marginheight='0',
              marginwidth='0'
            )
          .position-sticky.white(style='bottom: 0')
            v-divider
            v-card-actions
              v-spacer
              v-btn(color='primary', @click='dialog = false') {{ $t("btn.close") }}
</template>

<script>
import { mdiClose, mdiChevronDown, mdiPoll } from '@mdi/js'

export default {
  name: 'PollUsers',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    dialog: false,
    readonly: false,
    panel: [0],
    mdiClose,
    mdiChevronDown,
    mdiPoll,
  }),
  computed: {
    isLangVersion() {
      if (this.$i18n.locale === 'ru') {
        return '1FAIpQLSftHdzDYtGGmBVVegbYhjh9dgXHsBbzAWCfZcJsK42pFXkacg'
      } else if (this.$i18n.locale === 'en') {
        return '1FAIpQLSffkofhguj2ELiwL4sZMZN8aUromT852L6eN6HjepomEZZC6Q'
      }
      return null
    },
  },
}
</script>

<style>
.poll__modal .v-expansion-panel-content__wrap {
  padding: 0;
}
</style>
