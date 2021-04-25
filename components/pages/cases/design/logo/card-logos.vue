<template lang="pug">
v-card.card-logos.fill-height.d-flex.flex-column.shadow-md(min-width='295')
  v-card-title(:class='{ "text-no-wrap": $vuetify.breakpoint.smAndUp }')
    q {{ item.title }}
  v-card-subtitle.pb-0 {{ $t("works.types") }}: {{ item.ux.price }}
  v-card-subtitle.pt-0.pb-0 {{ $t("date.default") }}: {{ formatDate(item.created) }}
  v-card-subtitle.pt-0 {{ $t("pages.logos.format") }}: {{ !logoView && item.before ? item.before.format : item.after.format }}

  .flex-grow-1
    template(v-if='!logoView && item.before')
      v-img.pa-4.mx-auto(
        max-width='220',
        :src='item.before.img',
        :alt='item.title',
        contain,
        aspect-ratio='1.7'
      )
    template(v-if='logoView')
      v-img.pa-4.mx-auto(
        max-width='220',
        :src='item.after.img',
        :alt='item.title',
        contain,
        aspect-ratio='1.7'
      )

  .d-flex.justify-center.align-center.flex-shrink-0
    | {{ $t("events.before") }}
    v-switch.mx-4(v-model='logoView', :disabled='!item.before')
    | {{ $t("events.after") }}
</template>

<script>
export default {
  name: 'CardLogos',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    preview: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      logoView: this.preview,
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
