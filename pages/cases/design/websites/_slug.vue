<template>
  <div>
    <s-history-back class="mb-4" />

    <div class="d-none d-md-block case-image hidden">
      <v-img
        :src="website.img.src"
        class="fill-height"
      />
    </div>

    <v-container
      fluid
      class="mt-md-n16"
    >
      <!-- COMPONENT HEADER -->
      <v-row>
        <v-col
          cols="12"
          md="10"
          offset-md="1"
        >
          <s-pages-cases-components-slug-header :info="website" />
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
            go-to="cases/design/websites"
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
                <!-- SECTION CLIENT: ABOUT + TASKS + ISSUES -->
                <h2 class="mt-5 mb-5 text-md-h5 text-lg-h4 font-weight-bold">
                  01. {{ $t('pages.cases.slug.headings.sections[0]') }}
                </h2>
                <!-- COMPONENT CLIENT -->
                <v-row>
                  <v-col cols="12">
                    <s-pages-cases-components-slug-client
                      v-if="website.client.head !== null"
                      :client="website.client"
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
                  <!-- COMPONENT PREVIEW -->
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <s-pages-cases-components-slug-preview
                      v-if="!website.img.embed"
                      :preview="website"
                    />
                    <div
                      v-else
                      class="position-relative"
                    >
                      <iframe
                        :src="website.img.embed"
                        width="100%"
                        height="450"
                        frameborder="0"
                        allowfullscreen
                      />
                      <v-sheet
                        class="position-absolute"
                        height="48"
                        width="100%"
                        style="bottom: 0; background-color: var(--light)"
                      />
                    </div>
                  </v-col>
                  <!-- /COMPONENT -->

                  <!-- COMPONENT DONE -->
                  <v-col
                    v-if="website.done.list !== null"
                    cols="12"
                    md="11"
                  >
                    <s-pages-cases-components-slug-components-section-sub-title
                      :title="$t('pages.cases.slug.done')"
                    />
                    <s-pages-cases-components-slug-done
                      :list="website.done.list"
                    />
                  </v-col>
                  <!-- /COMPONENT -->
                </v-row>

                <v-row v-if="clientAlert.message !== null">
                  <v-col cols="12">
                    <v-alert
                      :type="clientAlert.type"
                      :icon="false"
                      :prominent="clientAlert.prominent"
                      :outlined="clientAlert.outlined"
                      :dismissible="clientAlert.dismissible"
                      text
                      border="left"
                      class="mt-3 mb-0"
                    >
                      {{ clientAlert.message }}
                    </v-alert>
                  </v-col>
                </v-row>
                <!-- /SECTION -->

                <!-- SECTION PALETTE -->
                <s-pages-cases-components-slug-components-section-sub-title
                  :title="$t('pages.cases.slug.colors')"
                />
                <!-- COMPONENT Palette -->
                <v-card
                  v-box-shadow="9"
                  class="px-4"
                >
                  <s-pages-cases-components-slug-palette
                    v-if="website.palette"
                    :palette="website.palette"
                  />
                </v-card>
                <!-- /COMPONENT -->
                <!-- /SECTION -->

                <!-- SECTION GRID -->
                <s-pages-cases-components-slug-components-section-sub-title
                  v-if="website.grid && $vuetify.breakpoint.lgAndUp"
                  :title="$t('pages.cases.slug.grid')"
                />
                <s-pages-cases-components-slug-grid
                  v-if="$vuetify.breakpoint.lgAndUp"
                  :grid="website.grid"
                />
                <!-- /SECTION -->

                <!-- SECTION TYPOGRAPHY -->
                <s-pages-cases-components-slug-components-section-sub-title
                  :title="$t('pages.cases.slug.typography.title')"
                />

                <s-pages-cases-components-slug-typography
                  v-if="website.typography"
                  :info="website.typography"
                />
                <!-- /SECTION -->

                <!-- SECTION RESPONSIVE -->
                <s-pages-cases-components-slug-components-section-sub-title
                  :title="$t('pages.cases.slug.responsive.title')"
                />
                <v-row v-if="website.responsive">
                  <v-col
                    cols="12"
                    md="7"
                    class="d-flex flex-column"
                  >
                    <div class="mb-4">
                      <p class="text-center text-md-left">
                        {{ $t('pages.cases.slug.responsive.friendliness') }}:
                      </p>
                      <v-list-item
                        class="text-h3 justify-center justify-md-start"
                        :style="'color:' + responseDone + '!important'"
                      >
                        {{ resPercent }} / 100
                      </v-list-item>
                    </div>
                    <!-- COMPONENT RESPONSIVE BLOCKS -->
                    <v-row
                      v-if="website.responsive.dash"
                      class="align-end"
                    >
                      <v-col
                        v-for="(name, value, index) in website.responsive.dash"
                        :key="index"
                        cols="12"
                        md="6"
                      >
                        <s-pages-cases-components-slug-responsive-blocks
                          :name="name"
                          :value="value"
                        />
                      </v-col>
                    </v-row>
                    <!-- /COMPONENT -->
                  </v-col>

                  <!-- COMPONENT RESPONSIVE CHART -->
                  <v-col
                    cols="12"
                    md="5"
                    class="not-pointer"
                  >
                    <s-pages-cases-components-slug-responsive-chart
                      :res="website.responsive"
                    />
                  </v-col>
                  <!-- /COMPONENT -->
                </v-row>

                <template v-else>
                  {{ $t('pages.cases.slug.responsive.optimization') }}
                </template>
                <!-- /SECTION -->

                <!-- SECTION DEADLINE -->
                <s-pages-cases-components-slug-components-section-sub-title
                  :title="$t('pages.cases.slug.deadline')"
                />
                <p>{{ website.deadline }}</p>
                <!-- /SECTION -->

                <!-- SECTION TESTIMONIALS -->
                <template v-if="website.testimonials">
                  <s-pages-cases-components-slug-components-section-sub-title
                    :title="$t('pages.cases.slug.testimonials')"
                  />
                  <s-pages-cases-components-slug-testimonials :info="website" />
                </template>
                <!-- /SECTION -->
              </v-card>
            </v-col>

            <!-- COMPONENT COMMENTS -->
            <v-col cols="12">
              <s-pages-cases-components-slug-components-leave-comments
                :comment="website.preview.to"
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
            go-to="cases/design/websites"
          />
        </v-col>
        <!-- /COMPONENT -->
      </v-row>

      <nuxt-content :document="website" />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CasesDesignWebsitesSlug',
  async asyncData({ $content, app, params }) {
    const website = await $content(
      `${app.i18n.locale}/cases/design/websites`,
      params.slug
    )
      .where({ type: 'des-site' })
      .fetch()

    const [prev, next] = await $content(
      `${app.i18n.locale}/cases/design/websites`
    )
      .where({ type: 'des-site' })
      .only(['title', 'slug'])
      .sortBy('created', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      website,
      prev,
      next,
    }
  },
  head() {
    return {
      title: this.website?.title ? this.website.title : '',
      titleTemplate: `%s · ${this.$t('pages.cases.title')} · ${this.$t(
        'author.name'
      )}`,
    }
  },
  computed: {
    clientAlert() {
      return this.website?.done?.alert ? this.website.done.alert : null
    },
    resPercent() {
      return this.website?.responsive?.percent
        ? this.website.responsive.percent
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
}
</script>

<style lang="scss">
$vec: '.v-expansion-panel-content';

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

#{$vec} {
  &.pa-0 {
    #{$vec} {
      &__wrap {
        padding: 0;
      }
    }
  }
}
</style>
