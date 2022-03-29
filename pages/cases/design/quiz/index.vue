<template lang="pug">
.page__des-quiz
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-finger-pres(
        absolute,
        right='0',
        bottom='-7',
        left='0',
        :width='null',
        :height='null'
      )
    template(#list-items)
      s-layout-components-back-image-list-items(
        :content='localeItems',
        :icon='mdiProgressCheck',
        :duration='2000',
        :message='$t("pages.shown")'
      )

  v-container
    v-row
      v-col(cols='12', sm='7')
        s-section-heading-anchor(
          :title='$t("pages.des-quiz.about.what")',
          anchor='what-is-quiz'
        )
        p {{ $t("pages.des-quiz.about.message") }}

      v-col.d-none.d-sm-block.mt-sm-n15.text-center.z-index-2(
        cols='12',
        sm='5'
      )
        s-fish-pages-des-quiz(:width='350', :height='null')

      v-col(cols='12')
        .nuxt-content
          ul.mb-4
            li(v-for='i of $t("pages.des-quiz.about.list")', :key='i')
              v-list-item-title {{ i }}

        p {{ $t("pages.des-quiz.message") }}

    //- SECTION WORKS
    s-section-heading-anchor(:title='$t("works.examples")', anchor='works')
    .d-grid.grid-cols-sm-3.gap-6.py-4(v-if='localeItems.length')
      template(v-for='(item, index) in localeItems')
        v-lazy(
          :key='index',
          :options='{ threshold: 0.5 }',
          transition='scroll-y-reverse-transition'
        )
          s-pages-cases-design-quiz-dialog-card(:content='item')
    lazy-s-works-not-found(v-else, :message='$t("works.works-not-found")')
    //- /SECTION
</template>

<script>
import { mdiProgressCheck } from '@mdi/js'
import { desQuiz } from '~/lib/page-meta'

export default {
  name: 'CasesDesignQuizIndex',
  async asyncData({ $content, app, params }) {
    const desQuizLocale = await $content(
      `${app.i18n.locale}/cases/design/quiz`,
      params.slug
    )
      .where({ type: 'des-quiz', hide: false })
      .sortBy('created', 'desc')
      .fetch()

    return { desQuizLocale }
  },
  data() {
    return {
      page: desQuiz(this),
      mdiProgressCheck,
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
      return this.desQuizLocale ? this.desQuizLocale : []
    },
    // currentTitle(el1, el2) {
    //   switch (el1.toString()) {
    //     case el1.toString():
    //       return el2[this.step - 1]
    //     default:
    //       return ''
    //   }
    // },
  },
}
</script>

<style lang="scss">
.page {
  &__des-quiz {
    --stop-color-one: #31a169;
    --stop-color-two: #cae242;
    --gradient-default: linear-gradient(
      45deg,
      var(--stop-color-one, var(--primary)) 50%,
      var(--stop-color-two, var(--accent)) 100%
    );
  }
}
</style>
