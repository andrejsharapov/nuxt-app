<template lang="pug">
.history-back.mt-4(v-if='$vuetify.breakpoint.xs')
  v-btn.history-back__button.text-none.font-weight-bold(
    text,
    depressed,
    :ripple='false',
    @click='$router.back()'
  )
    v-icon(left) {{ mdiChevronLeft }}
    | {{ $t("btn.go.back") }}
</template>

<script>
import { mdiChevronLeft } from '@mdi/js'

export default {
  name: 'HistoryBack',
  data() {
    return {
      mdiChevronLeft,
    }
  },
}
</script>

<style lang="sass" scoped>
.history-back
  &__button
    &:hover,
    &:focus
      &::before
        opacity: 0
</style>
