<template lang="pug">
.services-expansion-panels.mb-6
  //- btns
  .mb-3.d-flex(v-if='$vuetify.breakpoint.smAndUp')
    v-spacer
    v-btn-toggle(mandatory, borderless, color='primary')
      v-btn(:ripple='false', @click='none')
        v-icon {{ mdiViewSequential }}
      v-btn(:ripple='false', @click='all')
        v-icon {{ mdiFormatLineWeight }}

  //- panels
  v-expansion-panels(v-model='panel', focusable, flat, multiple, tile)
    v-expansion-panel.shadow-sm(v-for='(item, i) in items', :key='i')
      v-expansion-panel-header.py-6(disable-icon-rotate)
        | {{ item.title }}
        template(#actions)
          | {{ item.price.cost }}
      v-expansion-panel-content
        v-card-title {{ item.title }}
        v-card-subtitle {{ item.description.message }}
      v-divider
</template>

<script>
import { mdiViewSequential, mdiFormatLineWeight } from '@mdi/js'

export default {
  name: 'ServicesExpansionPanels',
  props: {
    model: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mdiViewSequential,
      mdiFormatLineWeight,
      panel: [],
    }
  },
  methods: {
    all() {
      this.panel = [...Array(this.items.length).keys()].map((k, i) => i)
    },
    none() {
      this.panel = []
    },
  },
}
</script>

<style scoped>
.v-expansion-panel-header--active {
  color: var(--light);
  background-image: linear-gradient(
    var(--direction-x),
    var(--stop-color-one),
    var(--stop-color-two)
  );
}
</style>
