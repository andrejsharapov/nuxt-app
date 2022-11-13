<template>
  <v-app dark>
    <v-container
      fluid
      class="error-page__content"
    >
      <v-row>
        <v-col
          cols="12"
          md="5"
          class="d-flex justify-center align-center d-none d-md-block"
        >
          <div class="error-page__back d-none d-sm-block">
            <lazy-s-fish-layouts-page-not-found
              v-if="error.statusCode === 404"
            />
            <lazy-s-fish-layouts-other-errors v-else />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="7"
        >
          <v-card
            elevation="0"
            class="pa-4 pa-sm-8"
          >
            <h2
              v-if="error.statusCode === 404"
              class="text-h5 text-sm-h4 font-weight-bold error--text"
            >
              <v-icon
                left
                :large="$vuetify.breakpoint.smAndUp"
                color="error"
              >
                {{ mdiAlert }}
              </v-icon>
              {{ $tc('app.errors.page-not-found.title') }}
            </h2>
            <h2
              v-else
              class="text-h5 text-sm-h4 font-weight-bold error--text"
            >
              {{ $tc('app.errors.other-errors.title') }}
            </h2>
            <template v-if="error.statusCode === 404">
              <p class="mt-4">
                <strong>
                  {{ $tc('app.errors.page-not-found.poll.question') }}
                </strong>
              </p>
              <v-radio-group v-model="radioGroup">
                <template
                  v-for="(n, index) in $t(
                    'app.errors.page-not-found.poll.answers'
                  )"
                >
                  <v-radio
                    :key="index"
                    draggable
                    :label="`${n.label}`"
                    :color="n.col ? n.col : 'primary'"
                    :value="n.col"
                    class="mb-3"
                    @click="pollAnswers"
                  />
                </template>
              </v-radio-group>
              <template v-if="radioGroup">
                <p
                  v-if="radioGroup == !'success'"
                  class="title"
                >
                  {{ $t('app.errors.page-not-found.poll.result[0]') }}
                </p>
                <div v-if="radioGroup === 'success'">
                  <p>{{ $t('app.errors.page-not-found.poll.result[1]') }}</p>
                  <v-btn
                    :block="$vuetify.breakpoint.xs"
                    :color="radioGroup"
                    :to="localePath('/')"
                    x-large
                    class="mt-4"
                  >
                    {{ $t('btn.go.home') }}
                  </v-btn>
                  <v-btn
                    :block="$vuetify.breakpoint.xs"
                    x-large
                    text
                    class="mt-4 ml-sm-4"
                    color="secondary"
                    @click="$router.back()"
                  >
                    {{ $t('btn.go.back') }}
                  </v-btn>
                </div>
              </template>
            </template>
            <template v-else>
              <p class="mt-4">
                <strong>{{ $tc('app.errors.other-errors.subtitle') }}</strong>
              </p>
              <p>{{ $t('app.errors.other-errors.messages[0]') }}</p>
              <p>{{ $t('app.errors.other-errors.messages[1]') }}</p>
              <v-btn
                :block="$vuetify.breakpoint.xs"
                :to="localePath('/')"
                x-large
                class="mt-4 white--text"
                color="primary"
              >
                {{ $t('btn.go.home') }}
              </v-btn>
              <v-dialog width="580">
                <template #activator="{ on }">
                  <v-btn
                    :block="$vuetify.breakpoint.xs"
                    x-large
                    text
                    class="mt-4 ml-sm-4 white--text"
                    color="secondary"
                    v-on="on"
                  >
                    {{ $t('btn.report-problem') }}
                  </v-btn>
                </template>
                <v-card
                  tile
                  class="rounded-l-lg py-4"
                >
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd-IySb-nNElwDaetsTGosKTMugrrDEYbiGAuduYivIqONvlg/viewform?embedded=true"
                    width="100%"
                    height="450"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    {{ $t('app.loading') }}…
                  </iframe>
                </v-card>
              </v-dialog>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <notifications
      group="answers"
      position="bottom right"
    />
  </v-app>
</template>

<script>
import { mdiAlert } from '@mdi/js'

export default {
  name: 'LayoutError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    mdiAlert,
    radioGroup: null,
  }),
  head() {
    const title =
      this.error.statusCode === 404
        ? this.$t('app.errors.page-not-found.title')
        : this.$t('app.errors.other-errors.title')

    return {
      title,
    }
  },
  methods: {
    pollAnswers() {
      const pollAnswersLocale = () => {
        if (this.radioGroup === 'success') {
          return this.$t('app.errors.page-not-found.poll.notify.success')
        } else if (this.radioGroup === 'error') {
          return this.$t('app.errors.page-not-found.poll.notify.error')
        } else {
          return this.$t('app.errors.page-not-found.poll.notify.warning')
        }
      }
      this.$notify(pollAnswersLocale())
    },
  },
}
</script>

<style lang="scss">
.error-page {
  &__back {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(0.7) translate(-157px, 66px);

    @media (--md-min) {
      top: 6vh;
      left: 5vw;
    }
  }
}
</style>
