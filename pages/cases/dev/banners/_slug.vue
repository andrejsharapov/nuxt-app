<template>
  <div>
    <s-history-back class="mb-4" />
    <div class="d-none d-md-block case-image hidden">
      <v-img :src="banner.img.src" class="fill-height" />
    </div>

    <v-container fluid class="mt-md-n16">
      <!-- COMPONENT HEADER -->
      <v-row>
        <v-col cols="12" md="10" offset-md="1">
          <s-pages-cases-components-slug-header :info="banner" />
        </v-col>
      </v-row>
      <!-- /COMPONENT -->

      <v-row>
        <!-- COMPONENT ARROW PREV -->
        <v-col
          cols="12"
          md="1"
          class="order-1 order-md-0 d-none d-sm-flex justify-start"
        >
          <s-pages-cases-components-slug-arrow-prev
            :prev="prev"
            go-to="cases/dev/banners"
          />
        </v-col>
        <!-- /COMPONENT -->

        <!-- SECTION CASE -->
        <v-col cols="12" md="10" class="order-0 order-md-0">
          <v-row no-gutters class="flex-column">
            <v-col cols="12">
              <v-card flat color="transparent">
                <!-- SECTION CLIENT: ABOUT + TASKS + ISSUES -->
                <h2 class="mt-5 mb-5 text-md-h5 text-lg-h4 font-weight-bold">
                  01. {{ $t('pages.cases.slug.headings.sections[0]') }}
                </h2>
                <!-- COMPONENT CLIENT -->
                <v-row>
                  <v-col cols="12">
                    <s-pages-cases-components-slug-client
                      v-if="banner.client.head !== null"
                      :client="banner.client"
                    />
                    <p v-else>{{ $t('pages.cases.slug.client.not-found') }}</p>
                  </v-col>
                </v-row>
                <!-- /COMPONENT -->
                <!-- /SECTION -->

                <!-- SECTION PREVIEW + DONE -->
                <h2 class="mt-5 mb-5 text-md-h5 text-lg-h4 font-weight-bold">
                  02. {{ $t('pages.cases.slug.headings.sections[1]') }}
                </h2>
                <v-row>
                  <!-- COMPONENT STORYBOARD -->
                  <v-col v-if="banner.done.list !== null" cols="12" md="7">
                    <s-pages-cases-components-slug-components-section-sub-title
                      :title="$t('pages.cases.slug.storyboard')"
                    />
                    <v-img
                      v-box-shadow="9"
                      :src="banner.storyboard.src"
                      :alt="banner.storyboard.alt ? banner.storyboard.alt : ''"
                      contain
                      aspect-ratio="1.7"
                    />
                  </v-col>
                  <!-- /COMPONENT -->

                  <!-- COMPONENT DONE -->
                  <v-col v-if="banner.done.list !== null" cols="12" md="5">
                    <s-pages-cases-components-slug-components-section-sub-title
                      :title="$t('pages.cases.slug.done')"
                    />
                    <s-pages-cases-components-slug-done
                      :list="banner.done.list"
                    />
                  </v-col>
                  <!-- /COMPONENT -->
                </v-row>
                <!-- /SECTION -->

                <!-- SECTION RESULT -->
                <s-pages-cases-components-slug-components-section-sub-title
                  :title="$t('pages.cases.slug.result.title')"
                />
                <div v-resize="onResize" class="not-pointer">
                  <div
                    v-if="
                      banner.animatic.width < windowSize.x &&
                      banner.animatic.height < windowSize.y
                    "
                    class="d-flex flex-column align-center justify-center pt-3"
                  >
                    <iframe
                      :src="`/src/nuxt-app/banners/${banner.slug}/index.html`"
                      :width="`${banner.animatic.width}px`"
                      :height="`${banner.animatic.height}px`"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <v-alert
                    v-else
                    class="mb-0 pa-0"
                    :icon="false"
                    type="warning"
                    text
                  >
                    <v-card flat color="transparent">
                      <v-card-title class="text-break-word warning--text">
                        {{
                          $t('pages.cases.slug.responsive.not-responsive.title')
                        }}
                      </v-card-title>
                      <v-card-subtitle class="text-break-word warning--text">
                        {{
                          $t(
                            'pages.cases.slug.responsive.not-responsive.message',
                            { size: `${banner.animatic.width}` }
                          )
                        }}
                      </v-card-subtitle>
                    </v-card>
                  </v-alert>
                </div>
                <!-- /SECTION -->

                <!-- SECTION DEADLINE -->
                <s-pages-cases-components-slug-components-section-sub-title
                  :title="$t('pages.cases.slug.deadline')"
                />
                <p>{{ banner.deadline }}</p>
                <!-- /SECTION -->

                <!-- SECTION TESTIMONIALS -->
                <template v-if="banner.testimonials">
                  <s-pages-cases-components-slug-components-section-sub-title
                    :title="$t('pages.cases.slug.testimonials')"
                  />
                  <s-pages-cases-components-slug-testimonials :info="banner" />
                </template>
                <!-- /SECTION -->
              </v-card>
            </v-col>

            <!-- COMPONENT COMMENTS -->
            <v-col cols="12">
              <s-pages-cases-components-slug-components-leave-comments
                :comment="banner.preview.to"
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
            go-to="cases/dev/banners"
          />
        </v-col>
        <!-- /COMPONENT -->
      </v-row>

      <nuxt-content :document="banner" />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CasesDevBannersSlug',
  async asyncData({ $content, app, params }) {
    const banner = await $content(
      `${app.i18n.locale}/cases/dev/banners`,
      params.slug
    )
      .where({ type: 'dev-banner' })
      .fetch()

    const [prev, next] = await $content(`${app.i18n.locale}/cases/dev/banners`)
      .where({ type: 'dev-banner' })
      .only(['title', 'slug'])
      .sortBy('created', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      banner,
      prev,
      next,
    }
  },
  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  head() {
    return {
      title: this.banner?.title ? this.banner.title : '',
      titleTemplate: `%s · ${this.$t('pages.cases.title')} · ${this.$t(
        'author.name'
      )}`,
    }
  },
  computed: {
    clientAlert() {
      return this.banner?.done?.alert ? this.banner.done.alert : null
    },
    resPercent() {
      return this.banner?.responsive?.percent
        ? this.banner.responsive.percent
        : 'undefined'
    },
    responseDone() {
      if (this.resPercent <= 64) {
        return 'var(--error)'
      } else if (this.resPercent <= 78) {
        return 'var(--warning)'
      } else if (this.resPercent <= 100) {
        return 'var(--success)'
      } else {
        return 'var(--secondary)'
      }
    },
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
  },
}
</script>

<style lang="scss">
.case-image {
  min-height: 50vh;
  max-height: 50vh;
}

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
