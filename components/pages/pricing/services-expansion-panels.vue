<template lang="pug">
v-card.services-expansion-panels.mb-6(v-box-shadow='6')
  v-data-table(
    v-model='selected',
    :loading='!items',
    :loading-text='$t("app.chat.loading.message")',
    :headers='headers',
    :items='items',
    :items-per-page='10',
    :sort-by='["title", "price.cost"]',
    :sort-desc='[false, true]',
    :search='search',
    show-expand,
    :single-expand='singleExpand',
    :expanded.sync='expanded',
    show-select,
    item-key='id',
    hide-default-footer
  )
    template(#no-results)
      | {{ $t("search.no-results") }}

    template(#top)
      .d-flex.py-1.flex-column.flex-sm-row.align-stretch.align-sm-center(
        flat,
        color='transparent'
      )
        v-text-field.mx-4.mx-sm-1.mt-0.pt-0(
          v-model='search',
          :prepend-inner-icon='mdiMagnify',
          :label='$t("search.label")',
          :placeholder='$t("search.placeholder")',
          single-line,
          :solo='$vuetify.breakpoint.smAndUp',
          flat,
          :hide-details='$vuetify.breakpoint.smAndUp',
          :full-width='$vuetify.breakpoint.xs'
        )

        v-spacer

        .px-3.d-flex.align-center.justify-end.justify-md-start
          v-btn-toggle(
            group,
            mandatory,
            tile,
            v-model='showDesc',
            color='primary'
          )
            v-btn.rounded(icon, @click='collapseAll')
              v-icon {{ mdiViewSequential }}
            v-btn.rounded(icon, @click='expandAll')
              v-icon {{ mdiFormatLineWeight }}

          v-btn.ml-1.rounded(
            v-model='singleExpand',
            icon,
            width='48',
            height='48',
            active-class='primary--text',
            @click='singleExpand = !singleExpand'
          )
            v-icon {{ singleExpand ? mdiCollapseAllOutline : mdiExpandAllOutline }}

    template(#header.data-table-select='{ items }')

    template(#item.data-table-select='{ item, select }')
      v-checkbox.mt-n1(
        :value='item.select',
        :input-value='item.select',
        hide-details,
        :disabled='item.price.cost === "договорная"',
        :off-icon='mdiCheckboxBlankOutline',
        :on-icon='mdiCheckboxMarkedOutline',
        color='success',
        @change='select($event)'
      )

    template(#item.price.discount='{ item }')
      v-chip(
        v-if='item.price.discount !== null',
        dark,
        :color='getColor(item.price.discount)'
      ) {{ item.price.discount }}

    template(#expanded-item='{ headers, item }')
      td(:colspan='headers.length') {{ item.description.message }}

    template(#footer)
      v-divider
      .pa-4.font-weight-bold(
        colspan='4',
        :class='{ "opacity-20": selected.length === 0 }'
      ) {{ $t("total.cost") }}: {{ filterSelected() ? filterSelected() : "0.00" }} {{ $t("price.rub") }}
</template>

<script>
import {
  mdiViewSequential,
  mdiFormatLineWeight,
  mdiMagnify,
  mdiDotsVertical,
  mdiCheckboxBlankOutline,
  mdiCheckboxMarkedOutline,
  mdiExpandAllOutline,
  mdiCollapseAllOutline,
} from '@mdi/js'

export default {
  name: 'ServicesExpansionPanels',
  props: {
    headers: {
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
      mdiMagnify,
      mdiDotsVertical,
      mdiCheckboxBlankOutline,
      mdiCheckboxMarkedOutline,
      mdiExpandAllOutline,
      mdiCollapseAllOutline,
      search: '',
      singleExpand: true,
      expanded: [],
      selected: [],
      showDesc: 0,
    }
  },
  methods: {
    expandAll() {
      this.expanded = this.items
    },
    collapseAll() {
      this.expanded = []
    },
    filterSelected() {
      const arr = this.selected

      if (arr.length) {
        return (
          arr.map((el) => el.price.cost)?.reduce((a, b) => a + b, 0) + '.00'
        )
      } else {
        return '0.00'
      }
    },
    getColor(el) {
      if (el > 0 && el < 500) {
        return 'pink darken-3'
      } else if (el >= 500 && el < 1000) {
        return 'amber darken-2'
      } else if (el >= 1000) {
        return 'success'
      } else {
        return 'transparent'
      }
    },
  },
}
</script>

<style>
.services-expansion-panels .v-data-table__expanded__content {
  background-color: transparent;
  box-shadow: none !important;
  /* background-image: linear-gradient(
    var(--direction-x),
    var(--stop-color-one),
    var(--stop-color-two)
  ); */
  /* color: var(--light); */
}
</style>
