<template lang="pug">
.case-arrow-link__next(v-if='arrow')
  v-tooltip(left, nudge-left='12')
    template(#activator='{ on }')
      v-btn(
        v-on='on',
        icon,
        large,
        :to='localePath(`/${nextLink}/${arrow.slug}`)'
      )
        v-icon {{ mdiChevronRight }}
    span.caption {{ arrow.title ? arrow.title : "" }}
</template>

<script>
import { mdiChevronRight } from '@mdi/js'

export default {
  name: 'CaseArrowNext',
  props: {
    next: {
      type: Object,
      default: () => null,
    },
    goTo: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      arrow: this.next,
      nextLink: this.goTo,
      mdiChevronRight,
    }
  },
}
</script>
