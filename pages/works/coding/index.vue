<template lang="pug">
.page__conding
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line-three(
        absolute,
        top='0',
        right='0',
        left='0',
        :width='null',
        :height='null'
      )
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiCodeJson',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='9')
        p {{ $t("pages.coding.message[0]") }}
          |
          |
          a(
            href='https://codepen.io/andrejsharapov',
            target='_blank',
            rel='noopener noreferrer'
          ) CodePen
            v-icon.ml-1(small, color='primary') {{ mdiOpenInNew }}
          |
          | {{ $t("pages.coding.message[1]") }}

      v-col.d-none.d-sm-block.mt-sm-n16.text-center(cols='12', sm='3')
        .position-absolute.mt-n10
          lazy-s-fish-pages-coding(width='290', :height='null')

      s-skill-slider(:items='skills.list')

      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')
        lazy-s-pages-coding-code-example(
          v-if='localeItems.length',
          :items='localeItems'
        )
        lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
</template>

<script>
import { mdiCodeJson, mdiOpenInNew } from '@mdi/js'
import { coding } from '~/lib/page-meta'

export default {
  async asyncData({ $content, params }) {
    const codeLocale = await $content('works/coding', params.slug)
      .where({ type: 'coding' })
      .sortBy('date', 'desc')
      .fetch()

    const skills = await $content('skills/coding').fetch()

    return {
      codeLocale,
      skills,
    }
  },
  data() {
    return {
      page: coding(this),
      mdiCodeJson,
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
      return this.codeLocale ? this.codeLocale : []
    },
  },
}
</script>

<style>
.page__conding {
  --stop-color-one: var(--black);
  --stop-color-two: var(--dark);
}
</style>
