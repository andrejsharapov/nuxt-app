<template lang="pug">
v-bottom-navigation.navbar-bottom(
  v-model='value',
  app,
  grow,
  hide-on-scroll,
  mandatory,
  height='60',
  :horizontal='$vuetify.breakpoint.sm',
  color='primary',
  :background-color='$vuetify.theme.dark ? "var(--sheet)" : "var(--light)"'
)
  v-btn(
    v-for='(item, index) in cutMenuStart',
    :key='item.title',
    :to='localePath(item.to)',
    :disabled='item.disabled',
    exact
  )
    span {{ item.title }}
    v-icon {{ item.action }}

  v-menu(offset-y, offset-x, transition='scroll-y-transition')
    template(#activator='{ on: showMenuMore }')
      v-btn.order-1(
        :color='value == 0 ? "primary--text" : "grey--text text--darken-2"',
        v-on='showMenuMore'
      )
        span.small {{ $t("more.base") }}
        v-icon {{ $vuetify.breakpoint.xs ? mdiDotsHorizontal : mdiDotsVertical }}
    v-list
      v-list-item-group(color='primary')
        v-list-item(
          v-for='item in cutMenuEnd',
          :key='item.title',
          :to='localePath(item.to)',
          :disabled='item.disabled',
          exact-path
        )
          v-list-item-icon
            v-icon(v-text='item.action', :disabled='item.disabled')
          v-list-item-content
            v-list-item-subtitle.small(v-text='item.title')
</template>

<script>
import { mdiDotsVertical, mdiDotsHorizontal } from '@mdi/js'

export default {
  name: 'NavbarBottom',
  props: {
    navbar: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    value: 1,
    mdiDotsVertical,
    mdiDotsHorizontal,
  }),
  computed: {
    cutMenuStart() {
      if (this.$vuetify.breakpoint.sm) {
        return this.navbar?.data?.slice(0, 4)
      } else {
        return this.navbar?.data?.slice(0, 3)
      }
    },
    cutMenuEnd() {
      if (this.$vuetify.breakpoint.sm) {
        return this.navbar?.data?.slice(4)
      } else {
        return this.navbar?.data?.slice(3)
      }
    },
  },
}
</script>
