<template lang="pug">
.case-header
  v-card.shadow-md(style='position-relative; z-index: 2')
    v-row.px-4(justify='space-around')

      //- SECTION info
      v-col.pt-4(cols='12', sm='7')
        .caption.pb-0.text-center.text-sm-left.grey--text.text--darken-2
          v-icon.d-block.d-sm-inline-block(left) {{mdiBriefcaseEditOutline}}
          | {{ info.ux.price }}
        v-card-title.px-0.pt-2.text-sm-h6.text-lg-h5.text-break-word.justify-center.justify-sm-start.text-center.text-sm-left.font-weight-bold {{ info.title }}

        //- CMS (Web dev)
        template(v-if='info.cms')
          template(v-for='(cms, i) in cmsSplit')
            v-card-subtitle.pl-0.pt-4.text-center.text-sm-left(:key='i')
              strong CMS:
              |
              | {{ cms.from }}
              template(v-if='cms.to')
                v-icon.mx-2(small, color='accent') {{mdiChevronRight}}
                | {{ cms.to }}

        //- RESIZE (Banners)
        template(v-if='info.resize')
            v-card-subtitle.pl-0.pt-4.text-center.text-sm-left
              strong {{ $t('pages.cases.slug.sizes') }}:&nbsp;
              template(v-for='(name, i) in Array.isArray(info.resize) ? info.resize : [info.resize]')
                span(v-if='Array.isArray(info.resize)', :key='i') {{ name }},&nbsp;
                span(v-else) {{ name }}
      //- /SECTION

      //- SECTION date
      v-col(cols='12', sm='4')
        .mt-md-n14.mb-md-n16.rounded-lg.hidden(
          :class='{ "shadow-xl": $vuetify.breakpoint.mdAndUp }'
          @click="switchDate"
        )
          v-date-picker(
            v-model='info.period',
            range,
            readonly,
            :min="info.period[0]"
            :max="info.period[1]"
            full-width,
            no-title,
            color='success',
            :prev-icon='mdiSkipPrevious',
            :next-icon='mdiSkipNext'
            :locale="this.$i18n.locale"

          )
      //- /SECTION

  v-row.mt-4
    //- COMPONENT TOOLS & ROLES
    v-col(cols='12', md='6')
      s-pages-cases-components-slug-components-header-tabs(:heading="$t('pages.cases.slug.header-tabs[0]')", :content="info.preview.tools")
    v-col(cols='12', md='6')
      s-pages-cases-components-slug-components-header-tabs(:heading="$t('pages.cases.slug.header-tabs[1]')", :content="info.preview.roles")
    //- /COMPONENT
</template>

<script>
import {
  mdiBriefcaseEditOutline,
  mdiChevronRight,
  mdiSkipPrevious,
  mdiSkipNext,
} from '@mdi/js'

export default {
  name: 'CaseHeader',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      mdiBriefcaseEditOutline,
      mdiChevronRight,
      mdiSkipPrevious,
      mdiSkipNext,
    }
  },
  computed: {
    cmsSplit() {
      return this.info.cms
        ? this.info.cms.split(';').map((item) => {
            const [from, to] = item.split(',')
            return { from, to }
          })
        : null
    },
  },
  methods: {
    switchDate() {
      const switchDateLocale = () => {
        if (this.$i18n.locale === 'ru') {
          return {
            group: 'case-switch-dates',
            type: 'error',
            title: 'Переключение даты',
            text:
              'Вы пытаетесь изменить период разработки. Извините, но это невозможно.',
          }
        } else if (this.$i18n.locale === 'en') {
          return {
            group: 'case-switch-dates',
            type: 'error',
            title: 'Date switch',
            text:
              'You are trying to change the development period. Sorry, but this is not possible.',
          }
        }
      }
      this.$notify(switchDateLocale())
    },
  },
}
</script>
