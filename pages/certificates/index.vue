<template lang="pug">
.page__certificates
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-flies-card-vertically
    template(#list-items)
      s-layout-components-back-image-list-grid(
        :content='certItems',
        :duration='2000'
      )

  v-container
    v-row
      v-col(cols='12', sm='8', md='9') {{ $t("pages.certificates.message") }}
      v-col.d-none.d-sm-block.mt-md-n16.text-center(
        cols='12',
        sm='4',
        md='3',
        style='z-index: 2'
      )
        s-fish-pages-certificates.mt-sm-n8.mt-md-n16(
          width='250',
          :height='null'
        )
      lazy-s-pages-certificates-cert-items(:items='certItems')
</template>

<script>
import { certificates } from '~/lib/page-meta'

export default {
  async asyncData({ $content, params }) {
    const certItems = await $content('pages/certificates', params.slug).fetch()

    return {
      certItems,
    }
  },
  data() {
    return {
      page: certificates(this),
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
}
</script>

<style>
.page__certificates {
  --stop-color-one: #16c1e9;
  --stop-color-two: #e3aefe;
}
</style>
