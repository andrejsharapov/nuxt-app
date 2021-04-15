<template lang="pug">
v-row.case-index
  v-col(v-for='card in items', :key='card.title', cols='12', sm='6')
    s-section-heading-anchor(:title='card.title', :anchor='card.alt')

    v-row
      v-col(v-for='item in card.list', :key='item.to')
        v-hover(v-slot='{ hover }')
          //- LINK
          nuxt-link(:to='localePath(item.to)')
            v-sheet.page__cases__card.pa-4.d-flex.flex-column.justify-center.align-center.text-center.rounded-xl.white--text(
              width='100%',
              min-width='180',
              height='250',
              :class='{ "shadow-lg": hover }',
              :style='{ backgroundImage: cardColor(card), transform: hover ? "scale(1.1)" : "" }'
            )
              div
                v-icon(color='white') {{ item.action }}
                v-list-item-title.pt-4.text-uppercase.font-weight-bold {{ item.title }}
                v-btn.mt-8.rounded-lg(outlined, color='white') {{ $t("btn.go.to") }}
</template>

<script>
export default {
  name: 'CaseIndex',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    cardColor(item) {
      if (item.alt === 'design') {
        return 'linear-gradient(225deg, #5b62e0, #5731a1)'
      } else {
        return 'linear-gradient(45deg, var(--orange), var(--pink))'
      }
    },
  },
}
</script>
