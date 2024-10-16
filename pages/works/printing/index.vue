<template lang="pug">
.page__printing
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-printing-paper(
        absolute,
        top='32',
        right='0',
        left='auto',
        :width='530',
        :height='null'
      )
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiPrinter',
        :duration='2000',
        :message='$t("pages.shown")'
      )
  v-container
    v-row
      v-col(cols='12', md='9')
        p(v-html='$t("pages.printing.message")')

      v-col.d-none.d-md-block.mt-n16.text-center(cols='12', md='3')
        .position-absolute.mt-n10
          lazy-s-fish-pages-printing(width='300', :height='null')

      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')
        v-row(v-if='localeItems.length')
          v-col(
            v-for='(item, index) of localeItems',
            :key='index',
            cols='12',
            md='6'
          )
            //- lazy-s-pages-printing-card(:item='item')
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiPrinter, mdiOpenInNew } from '@mdi/js'
import { printing } from '~/lib/page-meta'

export default {
  name: 'PrintingIndex',
  async asyncData({ $content, params }) {
    const printLocale = await $content('works/printing', params.slug)
      .where({ type: 'printing' })
      .sortBy('date', 'desc')
      .fetch()

    return {
      printLocale,
    }
  },
  data() {
    return {
      page: printing(this),
      mdiPrinter,
      mdiOpenInNew,
    }
  },
  head() {
    return {
      title: this.page.title,
      titleTemplate: `%s · ${this.$t('author.name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
  computed: {
    localeItems() {
      return this.printLocale ?? []
    },
  },
}
</script>

<style lang="sass">
.page
  &__printing
    --stop-color-one: #E39B0F
    --stop-color-two: #6C6B6B
</style>
