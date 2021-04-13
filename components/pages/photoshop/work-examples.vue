<template lang="pug">
v-card.work-examples.shadow-sm.fill-height
  v-card-title {{ titleLocale(item) }}
  v-card-subtitle {{ formatDate(item.date) }}
  .px-4
    .rounded.hidden
      v-img(
        :src='`http://cdn.madeas.ru/nuxt-app/photoshop/${item.folder}/done.jpg`',
        alt='',
        :aspect-ratio='item.ratio ? item.ratio : "1.7"',
        contain
      )

  v-expansion-panels(v-model='showPanel', flat, tile, accordion)
    v-expansion-panel
      v-expansion-panel-header
        v-card-subtitle.pa-0.caption {{ $t("source") }}
          v-icon(right, small) {{ mdiSwapHorizontal }}
      v-expansion-panel-content
        .mx-3.hidden-y
          perfect-scrollbar
            v-row.my-0.flex-nowrap
              v-col(
                v-for='(img, index) of item.src',
                :key='index',
                cols='12',
                md='6'
              )
                v-scale-transition
                  v-card
                    v-row.ma-0.fill-height(align='center', justify='center')
                      v-img(
                        :src='`http://cdn.madeas.ru/nuxt-app/photoshop/${item.folder}/src/${img}.jpg`',
                        alt='',
                        cover,
                        aspect-ratio='1.7'
                      )

  v-card-actions.px-4.pb-4.flex-column.flex-sm-row.align-start
    v-btn(
      v-for='(name, value) of item.links',
      :key='name',
      :href='name',
      icon,
      target='_blank',
      rel='noopener noreferrer'
    )
      v-icon {{ linkIcons(value) }}
    v-spacer.d-none.d-sm-block
    v-btn.mx-auto.mb-2.mb-sm-0.mr-sm-3(
      download,
      :href='`http://cdn.madeas.ru/nuxt-app/photoshop/${item.folder}/done.jpg`',
      :block='$vuetify.breakpoint.xs',
      text,
      title='',
      color='secondary'
    )
      | {{ $t("btn.download") }}
      v-icon(right) {{ mdiDownloadBoxOutline }}
    v-btn.mx-auto(
      :href='`http://cdn.madeas.ru/nuxt-app/photoshop/${item.folder}/done.jpg`',
      :block='$vuetify.breakpoint.xs',
      target='_blank',
      title='',
      color='primary'
    )
      | {{ $tc("btn.view", 1) }}
      v-icon(right) {{ mdiOpenInNew }}
</template>

<script>
import { mdiSwapHorizontal, mdiDownloadBoxOutline, mdiOpenInNew } from '@mdi/js'

export default {
  name: 'WorkExamples',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    sources: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      mdiSwapHorizontal,
      mdiDownloadBoxOutline,
      mdiOpenInNew,
      showPanel: this.sources,
    }
  },
  methods: {
    titleLocale(item) {
      if (this.$i18n.locale === 'ru') {
        return item.titleRu
      } else if (this.$i18n.locale === 'en') {
        return item.titleEn
      }
    },
    linkIcons(value) {
      if (value === 'dribbble') {
        return `$dribbbleOutline`
      } else if (value === 'instagram') {
        return `$instagramOutline`
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>
