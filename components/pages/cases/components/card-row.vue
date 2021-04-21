<template lang="pug">
.code-example(transition='slide-y-reverse-transition')
  .mb-6.card-view
    v-row(no-gutters)
      v-col(cols='12', md='4')
        v-list-item-subtitle.mb-4.ml-md-6.grey--text {{ site.ux.works }}
        v-card.rounded-lg.hidden.mb-md-4(
          :flat='$vuetify.breakpoint.smAndDown',
          :class='{ "card-view__image": $vuetify.breakpoint.mdAndUp }'
        )
          v-img(
            lazy-src='https://fakeimg.pl/300/e9ecf2/1e1e24?text=IMG',
            :src='site.img.src',
            :alt='site.img.alt',
            aspect-ratio='1.7'
          )
            template(#placeholder)
              v-row.fill-height.ma-0(align='center', justify='center')
                v-progress-circular(indeterminate, color='grey lighten-5')

      v-col(cols='12', md='8')
        v-card.mt-sm-4.ml-0.ml-lg-4(flat, color='transparent')
          v-card-subtitle.d-sm-flex.py-0 {{ site.ux.price }}
            v-spacer
            v-card-subtitle.py-0 {{ $t("date.default") }} &mdash;
            strong
              |
              | {{ formatDate(site.created) }}
          v-card-title {{ site.title }}
          v-card-text.pb-0.not-pointer.d-flex.align-center
            v-icon.mr-2 {{ mdiHammerWrench }}
            template(v-if='site.preview')
              v-chip-group(v-for='(tool, i) of sliceTagTools()', :key='i')
                v-chip(
                  v-for='(tag, index) in tool.tags',
                  :key='index',
                  label,
                  outlined,
                  small
                ) {{ tag }}

          v-btn.my-3.mt-sm-4(
            :to='`${$nuxt.$route.path}/${site.slug}`',
            :text='$vuetify.breakpoint.smAndUp',
            :large='$vuetify.breakpoint.xs',
            :block='$vuetify.breakpoint.xs',
            color='primary'
          ) {{ $t("more.details") }}
            v-icon(right, small) {{ mdiPageNextOutline }}
</template>

<script>
import { mdiHammerWrench, mdiPageNextOutline } from '@mdi/js'
export default {
  name: 'CardRow',
  props: {
    site: {
      type: Object,
      default: () => ({}),
    },
    showTools: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      mdiHammerWrench,
      mdiPageNextOutline,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
    sliceTagTools() {
      if (this.site?.preview?.tools) {
        if (this.showTools === 0) {
          return this.site.preview.tools.slice(0, 1)
        } else if (this.showTools === 1) {
          return this.site.preview.tools.slice(1, 2)
        } else {
          return this.site.preview.tools.slice(1, 3)
        }
      } else {
        return []
      }
    },
  },
}
</script>
