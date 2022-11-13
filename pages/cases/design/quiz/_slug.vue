<template>
  <div>
    <s-history-back />

    <v-container fluid>
      <v-row>
        <!-- COMPONENT ARROW PREV -->
        <v-col
          cols="12"
          md="1"
          class="order-1 order-md-0 d-none d-sm-flex justify-start"
        >
          <s-pages-cases-components-slug-arrow-prev
            :prev="prev"
            go-to="cases/design/quiz"
          />
        </v-col>
        <!-- /COMPONENT -->

        <!-- SECTION CASE -->
        <v-col
          cols="12"
          md="10"
          class="order-0 order-md-0"
        >
          <v-row
            no-gutters
            class="flex-column"
          >
            <v-col cols="12">
              <v-card
                flat
                color="transparent"
              >
                <v-toolbar
                  dark
                  flat
                  color="primary"
                  class="rounded"
                >
                  <v-card
                    flat
                    color="transparent"
                  >
                    <v-card-title>{{ desQuiz.title }}</v-card-title>
                    <v-card-subtitle>
                      {{ formatDate(desQuiz.created) }}
                    </v-card-subtitle>
                  </v-card>
                </v-toolbar>
                <v-timeline dense>
                  <v-timeline-item
                    v-for="(i, index) of desQuiz.section"
                    :key="i"
                    :value="index + 1"
                    small
                  >
                    <v-img
                      :src="`/src/nuxt-app/quiz/${desQuiz.slug}/${i}.jpg`"
                      alt=""
                      max-height="calc(100vh - 100px)"
                      contain
                    >
                    </v-img>
                  </v-timeline-item>
                </v-timeline>
              </v-card>
            </v-col>

            <!-- COMPONENT COMMENTS -->
            <v-col cols="12">
              <s-pages-cases-components-slug-components-leave-comments
                :comment="desQuiz.preview.to"
              />
            </v-col>
            <!-- /COMPONENT -->
          </v-row>
        </v-col>
        <!-- /SECTION -->

        <!-- COMPONENT ARROW NEXT -->
        <v-col
          cols="12"
          md="1"
          class="order-1 order-md-0 d-none d-sm-flex justify-end"
        >
          <s-pages-cases-components-slug-arrow-next
            :next="next"
            go-to="cases/design/quiz"
          />
        </v-col>
        <!-- /COMPONENT -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CasesDesignQuizSlug',
  async asyncData({ $content, app, params }) {
    const desQuiz = await $content(
      `${app.i18n.locale}/cases/design/quiz`,
      params.slug
    )
      .where({ type: 'des-quiz' })
      .fetch()

    const [prev, next] = await $content(`${app.i18n.locale}/cases/design/quiz`)
      .where({ type: 'des-quiz' })
      .only(['title', 'slug'])
      .sortBy('created', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      desQuiz,
      prev,
      next,
    }
  },
  head() {
    return {
      title: this.desQuiz?.title ? this.desQuiz.title : '',
      titleTemplate: `%s · ${this.$t('pages.cases.title')} · ${this.$t(
        'author.name'
      )}`,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>

<style lang="scss">
.case-arrow-link {
  &__prev,
  &__next {
    position: fixed;
    z-index: 1;
    top: 49%;
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
