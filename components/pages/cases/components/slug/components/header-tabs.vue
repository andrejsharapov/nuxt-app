<template lang="pug">
v-card.fill-height.shadow-md
  h3.pb-2.pt-4.pl-4.font-weight-bold {{ heading }}
  v-divider(inset)
  v-tabs(grow, vertical, center-active)
    v-tab.justify-start(v-for='(item, i) in content', :key='i')
      v-icon(left) {{ mdiTools }}
      |
      | {{ item.title }}

    v-tab-item(v-for='(tags, i) in content', :key='i', fixed-tabs)
      v-list.header-tabs-list(dense)
        v-list-item.header-tabs-list__item(
          v-for='(value, index) in Array.isArray(tags.tags) ? tags.tags : [tags.tags]',
          :key='index'
        )
          v-list-item-content.pa-0.header-tabs-list__item__content
            v-divider
            v-list-item-title.py-2.text-wrap {{ value }}
</template>

<script>
import { mdiTools } from '@mdi/js'

export default {
  name: 'CaseHeaderTabs',
  props: {
    heading: {
      type: String,
      default: '',
    },
    content: {
      type: [Array, Object],
      default: null,
    },
  },
  data() {
    return {
      mdiTools,
    }
  },
}
</script>

<style lang="postcss" scoped>
.header-tabs-list {
  &__item {
    &:nth-of-type(1) {
      .header-tabs-list {
        &__item {
          &__content {
            .v-divider {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
