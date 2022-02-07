<template>
  <v-scroll-y-reverse-transition>
    <!-- LINK -->
    <nuxt-link
      :to="
        customPath
          ? `${customPath}/${site.slug}`
          : `${$nuxt.$route.path}/${site.slug}`
      "
    >
      <v-hover v-slot="{ hover }">
        <div class="text-center">
          <v-list-item-subtitle class="mb-4 grey--text">
            {{ site.ux.works }}
          </v-list-item-subtitle>

          <v-card class="rounded-lg shadow-lg transition-fast-in-fast-out">
            <v-img
              :aspect-ratio="16 / 9"
              lazy-src="https://fakeimg.pl/300/e9ecf2/1e1e24?text=IMG"
              :src="site.img.src"
              :alt="site.img.alt"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>

              <v-fade-transition origin="center center">
                <div
                  v-if="hover"
                  class="d-flex align-center justify-center transition-fast-in-fast-out"
                  style="
                    height: 100%;
                    opacity: 0.9;
                    background-image: var(--gradient-default);
                  "
                >
                  <div class="white--text">
                    <briefcase-view-outline width="40" />
                  </div>
                </div>
              </v-fade-transition>
            </v-img>
          </v-card>

          <v-list-item>
            <v-list-item-content class="mt-4">
              <v-list-item-title class="mb-3">
                {{ site.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ formatDate(site.created) }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-hover>
    </nuxt-link>
  </v-scroll-y-reverse-transition>
</template>

<script>
import BriefcaseViewOutline from '~/assets/images/briefcase-view-outline.svg?inline'

export default {
  name: 'CardGrid',
  components: {
    BriefcaseViewOutline,
  },
  props: {
    site: {
      type: Object,
      default: () => ({}),
    },
    customPath: {
      type: String,
      default: '',
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>
