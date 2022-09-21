<template>
  <div class="page__des-site">
    <s-history-back />

    <s-layout-components-back-image :page="page">
      <template #back-image>
        <s-back-waves-line
          absolute
          right="0"
          bottom="-7"
          left="0"
          :width="null"
          :height="null"
        />
      </template>
      <template #list-items>
        <s-layout-components-back-image-list-items
          :content="localeItems"
          :icon="mdiCellphoneLink"
          :duration="2000"
          :message="$t('pages.shown')"
        />
      </template>
    </s-layout-components-back-image>

    <v-container>
      <v-row>
        <!-- SECTION IMG + MESSAGE -->
        <v-col cols="12" md="5" class="pr-lg-6">
          <v-row no-gutters class="flex-column">
            <v-col
              cols="12"
              class="d-none d-sm-block mt-sm-n15 text-center"
              style="z-index: 2"
            >
              <div class="mt-sm-n12">
                <s-fish-pages-des-site :width="350" :height="null" />
              </div>
            </v-col>
            <v-col cols="12">
              {{ $tc('pages.des-site.message', 1) }}
            </v-col>
          </v-row>
        </v-col>
        <!-- /SECTION -->

        <!-- COMPONENT CHART-->
        <v-col cols="12" md="7">
          <v-card v-box-shadow="18" class="mt-lg-n16 mb-4 pa-4">
            <v-lazy
              :options="{
                threshold: 0.5,
              }"
              transition="slide-y-reverse-transition"
            >
              <s-chart-apex :counters="chart" />
            </v-lazy>
          </v-card>
        </v-col>
        <!-- /COMPONENT -->

        <!-- SECTION SKILLS -->
        <v-col cols="12">
          <lazy-s-skill-slider :items="skills.list" />
        </v-col>
        <!-- /SECTION -->

        <!-- SECTION EXPERIENCE -->
        <v-col cols="12">
          <h3 class="mb-4 font-weight-bold">
            {{ $tc('pages.des-site.experience', 1) }}
          </h3>
          <v-card-text v-for="item in desExpList" :key="item.title">
            <s-pages-cases-design-websites-experience :item="item" />
          </v-card-text>
        </v-col>
        <!-- /SECTION -->

        <!-- SECTION WORKS-->
        <v-col cols="12">
          <!-- COMPONENT ANCHOR + MESSAGE -->
          <s-section-heading-anchor
            :title="$t('works.examples')"
            anchor="works"
          />
          <p>{{ $tc('pages.des-site.message', 2) }}</p>
          <!-- /COMPONENT -->

          <div v-if="localeItems.length" class="d-flex">
            <v-spacer />
            <v-btn-toggle
              v-if="$vuetify.breakpoint.mdAndUp"
              v-model="cardView"
              mandatory
              borderless
              color="primary"
            >
              <v-btn :ripple="false">
                <v-icon>{{ mdiViewGrid }}</v-icon>
              </v-btn>
              <v-btn v-if="$vuetify.breakpoint.mdAndUp" :ripple="false">
                <v-icon>{{ mdiViewDay }}</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <!-- COMPONENT WORKS -->
          <v-row v-if="localeItems.length">
            <v-col
              v-for="site of localeItems"
              :key="site.slug"
              cols="12"
              :md="cardView === 0 ? '6' : '12'"
            >
              <s-pages-cases-components-card-grid
                v-if="cardView === 0"
                :site="site"
              />
              <s-pages-cases-components-card-row
                v-if="cardView === 1"
                :site="site"
                :show-tools="0"
              />
            </v-col>
          </v-row>
          <lazy-s-works-not-found
            v-else
            :message="$t('works.works-not-found')"
          />
          <!-- /COMPONENT -->
        </v-col>
        <!-- /SECTION -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiCellphoneLink, mdiViewGrid, mdiViewDay } from '@mdi/js'
import { desSite } from '~/lib/page-meta'

export default {
  name: 'CasesDesignWebsitesIndex',
  async asyncData({ $content, app, params }) {
    const skills = await $content('skills/des-site').fetch()

    const chart = await $content(
      `${app.i18n.locale}/cases/design/websites/des-site-options`
    )
      .only(['chartOptions', 'chartSeries'])
      .fetch()

    const desSiteLocale = await $content(
      `${app.i18n.locale}/cases/design/websites`,
      params.slug
    )
      .where({ type: 'des-site', hide: false })
      .sortBy('created', 'desc')
      .fetch()

    return {
      skills,
      chart,
      desSiteLocale,
    }
  },
  data() {
    return {
      page: desSite(this),
      mdiCellphoneLink,
      mdiViewGrid,
      mdiViewDay,
      desExpList: [
        {
          img: { src: '/src/skills/ps.svg' },
          title: 'Photoshop',
          percent: '8',
        },
        {
          img: { src: '/src/skills/figma.svg' },
          title: 'Figma',
          percent: '3',
        },
      ],
      cardView: 0,
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
      return this.desSiteLocale ? this.desSiteLocale : []
    },
  },
}
</script>

<style lang="scss">
.page {
  &__des-site {
    --stop-color-one: #5731a1;
    --stop-color-two: #5b62e0;
    --gradient-default: linear-gradient(
      45deg,
      var(--stop-color-one, var(--primary)) 50%,
      var(--stop-color-two, var(--accent)) 100%
    );
  }
}
</style>
