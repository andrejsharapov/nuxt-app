<template lang="pug">
draggable.case-index.d-grid.grid-cols-sm-2.grid-cols-md-3.grid-cols-lg-4.gap-6(
  v-model='model',
  :component-data='getComponentDataChip()',
  v-bind='dragOptions',
  @start='drag = true',
  @end='drag = false'
)
  template(v-for='(card, index) in items')
    v-hover(:key='index', v-slot='{ hover }')
      //- LINK
      nuxt-link(:to='localePath(card.to)')
        v-sheet.page__cases__card.pa-4.d-flex.flex-column.justify-center.align-center.text-center.rounded-xl.white--text(
          tag='span',
          width='100%',
          min-width='180',
          height='250',
          :class='{ "shadow-lg": hover }',
          :style='{ backgroundImage: cardColor(card), transform: hover ? "scale(1.1)" : "" }'
        )
          span
            v-icon(color='white') {{ card.action }}
            v-list-item-title.d-block.pt-4.text-uppercase.font-weight-bold(
              tag='span'
            ) {{ card.title }}
            v-btn.mt-8.rounded-lg(outlined, color='white') {{ $t("btn.go.to") }}
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'CaseIndex',
  components: {
    draggable,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      model: null,
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'cases',
        disabled: this.dragDisabled(),
        ghostClass: 'drag',
      }
    },
  },
  methods: {
    dragDisabled() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return true
      } else {
        return false
      }
    },
    getComponentData() {
      return {
        attrs: {
          class: 'row',
        },
      }
    },
    getComponentDataChip() {
      return {
        attrs: {
          class: 'skill-card',
        },
      }
    },
    cardColor(item) {
      if (item.to.split('/').includes('design')) {
        return 'linear-gradient(225deg, #5b62e0, #5731a1)'
      } else {
        return 'linear-gradient(45deg, var(--orange), var(--pink))'
      }
    },
  },
}
</script>
