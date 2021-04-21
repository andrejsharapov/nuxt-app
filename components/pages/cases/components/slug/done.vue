<template lang="pug">
.case-done
  perfect-scrollbar
    v-list(color='transparent')
      v-list-item(v-for='(value, index) in list', :key='index')
        v-list-item-icon
          v-icon(color='success') {{ mdiClipboardCheckOutline }}
        v-list-item-content
          v-list-item-title.text-wrap {{ value }}
</template>

<script>
import { mdiClipboardCheckOutline } from '@mdi/js'

export default {
  name: 'CaseDone',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mdiClipboardCheckOutline,
    }
  },
}
</script>

<style>
@media (--sm-min) {
  .case-done {
    .ps {
      height: 450px;
    }
  }
}
</style>
