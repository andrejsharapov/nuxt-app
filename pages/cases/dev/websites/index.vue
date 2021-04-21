<template>
  <div class="page__dev-site">
    <s-history-back />

    <s-layout-components-back-image :page="page">
      <template #back-image>
        <s-back-waves-line-two
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
          :icon="mdiResponsive"
          :duration="2000"
          :message="$t('pages.shown')"
        />
      </template>
    </s-layout-components-back-image>

    <v-container>
      <v-row>
        <!-- SECTION IMG -->
        <v-col
          cols="12"
          md="6"
          class="d-none d-sm-block mt-sm-n15 pr-lg-6 text-center"
          style="z-index: 2"
        >
          <s-fish-pages-dev-site
            class="mt-sm-n4 mb-8"
            :width="null"
            :height="220"
          />
        </v-col>
        <!-- /SECTION -->

        <!-- SECTION SKILLS -->
        <v-col cols="12" md="6" class="mt-lg-n16">
          <lazy-s-skill-slider :items="skills.list" />
        </v-col>
        <!-- /SECTION -->

        <!-- SECTION CMS -->
        <v-col cols="12">
          <s-section-heading-anchor title="CMS" anchor="cms" />
          <p>
            {{ $t('pages.dev-site.cms') }}
          </p>
        </v-col>

        <!-- COMPONENT CHART -->
        <v-col cols="12">
          <v-card class="mb-4 pa-4 shadow-xl">
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
        <!-- /SECTION -->

        <!-- SECTION WORKS-->
        <v-col cols="12">
          <!-- COMPONENT ANCHOR + MESSAGE -->
          <s-section-heading-anchor
            :title="$t('works.examples')"
            anchor="works"
          />
          <p>
            {{ $t('pages.dev-site.message') }}
          </p>
          <!-- /COMPONENT -->

          <div v-if="localeItems.length" class="d-flex">
            <v-spacer />
            <v-btn-toggle
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
import { mdiResponsive, mdiViewGrid, mdiViewDay } from '@mdi/js'
import { devSite } from '~/lib/page-meta'

export default {
  async asyncData({ $content, app, params }) {
    const skills = await $content('skills/dev-site').fetch()

    const chart = await $content(
      `${app.i18n.locale}/pages/cases/dev/websites/dev-site-options`
    )
      .only(['chartOptions', 'chartSeries'])
      .fetch()

    const devSiteLocale = await $content(
      `${app.i18n.locale}/pages/cases/dev/websites`,
      params.slug
    )
      .where({ type: 'dev-site', hide: false })
      .sortBy('created', 'desc')
      .fetch()

    return {
      skills,
      chart,
      devSiteLocale,
    }
  },
  data() {
    return {
      page: devSite(this),
      mdiResponsive,
      mdiViewGrid,
      mdiViewDay,
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
      return this.devSiteLocale ? this.devSiteLocale : []
    },
  },
}
</script>

<style>
.page__dev-site {
  --stop-color-one: var(--orange);
  --stop-color-two: #e24275;
  --gradient-default: linear-gradient(
    45deg,
    var(--stop-color-one, var(--primary)) 50%,
    var(--stop-color-two, var(--accent)) 100%
  );
}
</style>
