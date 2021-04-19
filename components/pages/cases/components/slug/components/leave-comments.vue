<template lang="pug">
.leave-comments
  v-alert(
    border='right',
    prominent,
    type='success',
    color='primary',
    :icon='$vuetify.breakpoint.mdAndUp ? mdiChat : false'
  )
    .d-flex.flex-column.flex-md-row.align-center.justify-space-between
      h2.text-h6.text-sm-h5.my-0.font-weight-bold {{ $t("works.rate") }}
      v-btn(icon, x-large, depressed, disabled)
        v-icon(x-large) {{ $vuetify.breakpoint.mdAndUp ? mdiArrowRight : mdiArrowDown }}
      span
        v-tooltip(left)
          template(#activator='{ on }')
            v-btn.white.primary--text(
              fab,
              v-on='on',
              @click='disqusOpen = !disqusOpen'
            )
              v-icon(large) {{ mdiDisqus }}
          span {{ disqusOpen ? $tc("events.hide", 1) : $tc("events.show", 1) }} Disqus
        v-btn.ml-2(
          v-if='comment.dribbble != null',
          x-large,
          icon,
          :href='comment.dribbble',
          target='_blank',
          rel='noopener noreferrer'
        )
          v-icon(large) $dribbbleOutline
        v-btn.mx-2(
          v-if='comment.behance != null',
          x-large,
          icon,
          :href='comment.behance',
          target='_blank',
          rel='noopener noreferrer'
        )
          v-icon(large) $behanceOutline
        v-btn(
          v-if='comment.instagram != null',
          x-large,
          icon,
          :href='comment.instagram',
          target='_blank',
          rel='noopener noreferrer'
        )
          v-icon(large) $instagramOutline
  disqus(v-if='disqusOpen === true')
</div>
</template>

<script>
import { mdiChat, mdiArrowRight, mdiArrowDown, mdiDisqus } from '@mdi/js'

export default {
  name: 'CaseLeaveComments',
  props: {
    comment: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      mdiChat,
      mdiArrowRight,
      mdiArrowDown,
      mdiDisqus,
      disqusOpen: false,
    }
  },
}
</script>
