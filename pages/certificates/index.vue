<template lang="pug">
.page__certificates
  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-flies-card-vertically

    template(#list-items)
      s-layout-components-back-image-list-grid(
        :content='certItems',
        :duration='2000'
      )

  s-history-back
  v-container
    v-row
      v-col(cols='12')
        pre {{ certItems }}
</template>

<script>
import { certificates } from '~/lib/page-meta'

export default {
  async asyncData({ $content, params }) {
    const certItems = await $content('certificates', params.slug).fetch()

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
