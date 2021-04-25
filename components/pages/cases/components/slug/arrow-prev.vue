<template lang="pug">
.case-arrow-link__prev(v-if='arrow')
  v-tooltip(right, nudge-right='12')
    template(#activator='{ on }')
      v-btn(
        v-on='on',
        icon,
        large,
        :to='localePath(`/${prevLink}/${arrow.slug}`)'
      )
        v-icon {{ mdiChevronLeft }}
    span.caption {{ arrow.title ? arrow.title : "" }}
</template>

<script>
import { mdiChevronLeft } from '@mdi/js'

export default {
  name: 'CaseArrowPrev',
  props: {
    prev: {
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
      arrow: this.prev,
      prevLink: this.goTo,
      mdiChevronLeft,
    }
  },
}
</script>
