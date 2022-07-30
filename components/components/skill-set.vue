<template lang="pug">
mixin sheet(saturation, size)
  v-sheet.rounded-circle.d-flex.justify-center.align-center(
    :class='set.color',
    color=saturation,
    width=size,
    height=size
  )
    if block
      block

.skill-set
  v-row.mx-auto(
    :class='{ "scroll-snap-x": $vuetify.breakpoint.xs }',
  )
    v-col.skill-set__block(v-for='(set, index) in set', :key='index')
      v-sheet.mb-3.pa-4.fill-height.rounded-lg(
        :color='$vuetify.theme.dark ? "" : set.color + " lighten-5"'
      )
        .mb-4.d-flex.align-center
          span(v-if='$vuetify.theme.dark')
            +sheet('darken-4', 90)
              +sheet('darken-3', 80)
                +sheet('darken-2', 70)
                  v-avatar(:color='set.color ? set.color : "grey"', size='60')
                    v-icon(dark, large) {{ set.icon ? set.icon : "alert" }}
          span(v-else)
            +sheet('lighten-4', 90)
              +sheet('lighten-3', 80)
                +sheet('lighten-2', 70)
                  v-avatar(:color='set.color ? set.color : "grey"', size='60')
                    v-icon(dark, large) {{ set.icon ? set.icon : "alert" }}

          v-card-title.text-no-wrap {{ set.alt }}

        draggable(
          v-model='set.set',
          :component-data='getComponentDataChip()',
          v-bind='dragOptions',
          @start='drag = true',
          @end='drag = false'
        )
          v-chip.ma-2.skill-set__chip(
            v-for='(chip, i) in Array.isArray(set.set) ? set.set : [set.set]',
            :key='i',
            dark,
            outlined,
            :color='set.color',
            @click='chipClicked'
          )
            v-avatar(left)
              v-icon {{ mdiCheckboxMarkedCircleOutline }}
            | {{ chip }}
</template>

<script>
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js'
import draggable from 'vuedraggable'

export default {
  name: 'SkillSet',
  components: {
    draggable,
  },
  props: {
    set: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    mdiCheckboxMarkedCircleOutline,
  }),
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'drag',
      }
    },
  },
  methods: {
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
    chipClicked() {
      const skillSetItem = () => {
        if (this.$i18n.locale === 'ru') {
          return {
            group: 'skillset-item',
            type: 'success',
            title: 'Вы нашли секретик!',
            text: 'Бейджики можно менять местами и перетаскивать в соседние блоки.',
          }
        } else if (this.$i18n.locale === 'en') {
          return {
            group: 'skillset-item',
            type: 'success',
            title: 'You have found a secret!',
            text: 'Badges can be swapped and dragged into adjacent blocks.',
          }
        }
      }
      this.$notify(skillSetItem())
    },
  },
}
</script>

<style lang="sass">
.skill-set
  &__block
    min-width: 22rem

  &__chip
    cursor: -webkit-grab
    cursor: -moz-grab
    cursor: -o-grab
    cursor: grab

    &:active
      cursor: -webkit-grabbing
      cursor: -moz-grabbing
      cursor: -o-grabbing
      cursor: grabbing

    &:hover
      border-style: dashed
</style>
