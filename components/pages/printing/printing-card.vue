<template lang="pug">
v-card.printing-card.fill-height.d-flex.flex-column(v-box-shadow='6')
  v-lazy
    v-img.rounded-t(
      :src='`/src/nuxt-app/printing/${item.slug}/${item.cover}`',
      :alt='titleLocale(item).title',
      contain
    )

  .grow
    v-card-title {{ titleLocale(item).title }}
    v-card-subtitle {{ formatDate(item.date) }}
    v-card-text(v-if='titleLocale(item).desc') {{ titleLocale(item).desc }}

  // ANCHOR process
  v-expansion-panels(flat, tile, accordion)
    v-expansion-panel.transparent(v-if='imgContent.length')
      v-expansion-panel-header.px-4
        v-card-subtitle.pa-0.caption {{ $tc('process', 1) + ' + ' + $tc('result', 1).toLowerCase() }}
          v-icon(right, small) {{ mdiSwapHorizontal }}
      v-expansion-panel-content.px-0
        v-slide-group.px-4(:show-arrows='!$vuetify.breakpoint.xs')
          v-slide-item(v-for='(p, i) in imgContent', :key='i')
            v-dialog(max-width='80vw', content-class='overflow-hidden')
              template(#activator='{ on: openImg }')
                v-sheet.d-flex.flex-column.mx-2.text-center.pa-2.cursor-pointer(
                  outlined,
                  rounded
                )
                  v-img.mb-1.grow(
                    :src='p.src',
                    contain,
                    max-width='200',
                    v-on='openImg'
                  )
                  i.text-caption {{ p.caption }}
              v-sheet
                v-lazy
                  v-img(:src='p.src', contain)
</template>

<script>
import { mdiSwapHorizontal } from '@mdi/js'

export default {
  name: 'PrintingCard',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    mdiSwapHorizontal,
  }),
  computed: {
    imgContent() {
      const path = '/src/nuxt-app/printing'
      const p = this.item.folders.process || []
      const r = this.item.folders.result || []

      const process = () => {
        return p?.map((e) => {
          return {
            src: `${path}/${this.item.slug}/process/${e}`,
            caption: e.split('.')[0],
          }
        })
      }

      const result = () => {
        return r?.map((e) => {
          return {
            src: `${path}/${this.item.slug}/result/${e}`,
            caption: e.split('.')[0],
          }
        })
      }

      return process().concat(result()) || []
    },
  },
  methods: {
    titleLocale(item) {
      if (this.$i18n.locale === 'ru') {
        return {
          title: item.titleRu,
          desc: item.descRu,
        }
      } else if (this.$i18n.locale === 'en') {
        return {
          title: item.titleEn,
          desc: item.descEn,
        }
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>

<style lang="sass">
.printing-card
  .v-slide-group
    &__next,
    &__prev
      min-width: 1.5rem

      &:hover
        background-color: rgb(0 0 0 / 12%)

  .v-expansion-panel-content
    &.px-0
      .v-expansion-panel-content
        &__wrap
          padding-inline: 0
</style>
