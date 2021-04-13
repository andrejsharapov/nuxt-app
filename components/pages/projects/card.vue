<template>
  <div transition="slide-y-reverse-transition" class="mb-4 project-card">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-card
          :flat="$vuetify.breakpoint.smAndDown"
          :class="{ 'project-card__image': $vuetify.breakpoint.mdAndUp }"
          class="rounded-lg mb-sm-4 hidden"
        >
          <v-img
            lazy-src="https://fakeimg.pl/300/e9ecf2/1e1e24?text=IMG"
            :src="project.img.src"
            :alt="project.img.alt"
            aspect-ratio="1.7"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card flat class="transparent mt-sm-4 ml-0 ml-lg-4">
          <v-card-subtitle class="d-sm-flex pb-0">
            {{ $tc('category', 0) }} &mdash;&nbsp;<strong>
              {{ project.type }}
            </strong>
            <v-spacer />
            {{ $t('date.default') }} &mdash;&nbsp;<strong>
              {{ formatDate(project.created) }}
            </strong>
          </v-card-subtitle>
          <v-card-title
            :id="project.slug"
            class="d-inline-block anchor-link text-break-word font-weight-bold"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ project.title }}
            <nuxt-link
              :to="$nuxt.$route.path + '#' + project.slug"
              class="ml-1"
            >
              #
            </nuxt-link>
          </v-card-title>
          <v-card-text class="text-wrap">{{ project.desc }}</v-card-text>
          <v-btn
            :text="$vuetify.breakpoint.smAndUp"
            :large="$vuetify.breakpoint.xs"
            :block="$vuetify.breakpoint.xs"
            color="primary"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('btn.go.to') }}
            <v-icon right>{{ mdiOpenInNew }}</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

export default {
  name: 'ProjectsCard',
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      mdiOpenInNew,
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
$card: project-card;

.#{$card} {
  &__image {
    transform: perspective(800px) rotateY(25deg) scale(0.8) rotateX(10deg);
    filter: blur(2px);
    opacity: 0.5;
    transition: all var(--base-time) cubic-bezier(0.25, 0.1, 0, 2.05);
  }

  &:hover {
    .#{$card} {
      &__image {
        transform: perspective(800px) rotateY(-15deg) translateY(-50px)
          rotateX(10deg) scale(1);
        filter: blur(0);
        opacity: 1;
        box-shadow: var(--shadow-xl);

        &:hover {
          transform: none;
        }
      }
    }
  }
}
</style>
