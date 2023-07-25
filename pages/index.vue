<template lang="pug">
mixin sheet(color, saturation, size)
  v-sheet.d-flex.justify-center.align-center.rounded(
    color=color + ' ' + saturation,
    width=size,
    height=size
  )
    if block
      block

.page__index
  v-container
    //- SECTION[epic=home] ABOUT
    .personal-info.fill-width.d-grid.grid-cols-1.grid-cols-md-3.grid-cols-xl-4.gap-md-4
      //- ANCHOR 1/3 author image
      .d-md-grid.gap-lg-4.row-span-lg-2.flex-lg-column(
        :class='{ "d-none": $vuetify.breakpoint.smAndDown }'
      )
        v-hover(#default='{ hover }')
          v-img.rounded-lg(
            v-box-shadow:ay-5,
            lazy-src='https://fakeimg.pl/300/e9ecf2/1e1e24?text=AUTHOR',
            :src='hover ? "/src/author/unicorn.jpg" : "/src/author/author.jpg"',
            :alt='$t("author.name")'
          )
            template(#placeholder)
              v-row.fill-height.ma-0(align='center', justify='center')
                v-progress-circular(indeterminate, color='grey lighten-5')

        v-hover(#default='{ hover }')
          v-btn.d-none.d-lg-flex.align-center.mx-auto.mt-auto.mb-0.uppercase(
            block,
            text,
            plain,
            :href='storyLocale().path',
            :color='hover ? "grey darken-2" : "grey lighten-1"',
            rel='noopener noreferrer',
            target='_blank'
          ) {{ storyLocale().title }}
            v-icon(right) {{ mdiOpenInNew }}

      //- ANCHOR 2/3 author info
      .col-span-md-2.col-span-xl-3
        h1.mb-3.text-h2.text-center.text-md-left.font-weight-medium {{ $t('author.name') }}
        h3.mb-8.text-h5.text-sm-h3.text-lg-h2.text-center.text-md-left.font-weight-bold.text-gradient(
          style='background-image: linear-gradient(180deg, var(--v-info-lighten2), var(--v-accent-darken1))'
        )
          strong {{ this.$t('author.position[0]') }},
          br
          strong {{ this.$t('author.position[1]') }}

        p.mb-md-0 {{ $t('pages.index.sections.about.message', { author: $t('author.name'), years: declensions(years, localeWords) }) }}

      //- ANCHOR 3/3 activity
      .col-span-md-3.px-lg-0.col-span-lg-2.col-span-xl-3
        p {{ $t('pages.index.sections.about.activity.prepend') }}:
        .d-md-grid.grid-cols-3.mb-3
          template(
            v-for='(card, index) in $t("pages.index.sections.about.activity.list")'
          )
            v-hover(#default='{ hover }', :key='index')
              v-sheet.px-4.fill-height.rounded-lg.transition(
                :class='$vuetify.theme.dark ? "transparent" : hover ? "white shadow-sm" : "transparent"'
              )
                v-list-item.px-0.d-flex.flex-md-column.text-md-center.flex-lg-row.text-lg-left
                  v-list-item-icon.mr-0.align-self-center
                    span(v-if='$vuetify.theme.dark')
                      +sheet('blue', 'darken-4', 50)
                        +sheet('blue', 'darken-3', 40)
                          +sheet('blue', 'darken-2', 30)
                            v-avatar.rounded-lg(size='20', tile)
                              span.font-weight-bold.white--text {{ index + 1 }}
                    span(v-else)
                      +sheet('blue', 'lighten-4', 50)
                        +sheet('blue', 'lighten-3', 40)
                          +sheet('blue', 'lighten-2', 30)
                            v-avatar.rounded-lg(size='20', tile)
                              span.font-weight-bold.white--text {{ index + 1 }}
                  v-list-item-content.pa-4.py-md-0
                    v-list-item-title.text-wrap.text-sm-subtitle-2(
                      :style='{ color: $vuetify.theme.dark ? "" : "var(--secondary)" }'
                    ) {{ card.message }}

        p {{ $tc('pages.index.sections.about.activity.append') }}
    //- /SECTION

    //- SECTION[epic=home] COUNTERS
    p {{ $tc('pages.index.sections.counters.message') }}

    v-row
      v-col(v-for='counter in counters.data', :key='counter.title')
        v-card.mb-4.px-4.white--text.rounded-lg.not-pointer(
          v-box-shadow:el-12,
          :color='counter.color_one',
          :style='{ backgroundImage: "linear-gradient(45deg, " + counter.color_one + ", " + counter.color_two + ")" }'
        )
          .d-flex.align-center
            .ml-2
              v-sheet.rounded-lg.hidden.opacity-80(
                color='white',
                width='62',
                height='62'
              )
                .d-flex.justify-center.align-center.fill-height
                  v-icon(:color='counter.color_one', large) {{ counter.icon }}
            v-list-item-content
              v-card-title.text-h4.mb-1.pt-2.text-break-word {{ counter.val }}%
              v-card-subtitle.white--text.text-no-wrap.opacity-80 {{ counter.title }}
      //- /SECTION

      //- SECTION[epic=home] PROGRESS
      //- ANCHOR 1/3
      v-col(cols='12', sm='8')
        s-section-heading-anchor.text-no-wrap(
          :title='$t("pages.index.sections.progress.title")',
          anchor='progress'
        )
        p {{ $t('pages.index.sections.progress.message', { projects: doneProjects, works: doneWorks }) }}

      //- ANCHOR 2/3
      v-col.text-center(cols='12', sm='4')
        s-fish-pages-progress(width='275')

      //- ANCHOR 3/3
      v-col(cols='12')
        v-row
          //- ANCHOR sub 1/2 timeline
          v-col.section-timeline(v-if='timelineLocale', cols='12', md='5')
            v-card.pr-sm-2.pt-4.pb-2(flat, color='transparent')
              perfect-scrollbar(ref='scroll')
                v-card.fill-height(outlined, tile, color='transparent')
                  v-timeline(dense)
                    v-timeline-item(
                      v-for='(item, index) in timelineLocale',
                      :key='index',
                      dense,
                      small,
                      color='accent'
                    )
                      v-sheet.rounded(v-box-shadow='9')
                        v-list-item.px-0(three-line)
                          v-list-item-content.py-0
                            .d-flex
                              v-card-title.text-wrap {{ item.title }}
                              v-spacer
                              v-chip.mt-4.mr-4(label, outlined, disabled) {{ item.date }}
                            v-card-text.pt-0 {{ item.caption }}

              v-card-actions.pb-0.text-center
                v-tooltip(
                  :right='$vuetify.breakpoint.mdAndUp',
                  :bottom='$vuetify.breakpoint.smAndDown'
                )
                  template(#activator='{ on }', v-if='!$vuetify.breakpoint.xs')
                    v-btn.mx-auto.mr-sm-auto.ml-sm-6(
                      icon,
                      :to='localePath("/timeline")',
                      v-on='on'
                    )
                      v-icon {{ mdiDotsHorizontal }}
                  span {{ $t('more.events') }}

          v-col.text-center(v-if='$vuetify.breakpoint.xs', cols='12')
            v-btn.mx-auto.transition.transform(
              :block='$vuetify.breakpoint.xs',
              :to='localePath("/timeline")',
              x-large,
              color='primary',
              :class='$vuetify.breakpoint.mdAndUp && hover ? "shadow-xl scale-125 -translate-y-1" : "shadow-sm"'
            ) {{ $t('more.events') }}

          //- ANCHOR sub 2/2 chart
          v-col.d-none.d-sm-block(
            cols='12',
            :md='timelineLocale.length ? 7 : 12'
          )
            v-card.pa-4(flat, color='transparent')
              s-chart-apex(:counters='annualReport', style='max-height: 430px')
      //- /SECTION

      //- SECTION[epic=home] WORKS
      v-col(cols='12')
        s-section-heading-anchor(:title='$t("works.examples")', anchor='works')
        p(
          v-html='$t("pages.index.sections.works.message", { from: " <code>.PSD</code> ", to: " <code>Figma</code> " })'
        )

        v-row(v-if='localeCases.length')
          v-col(
            v-for='site of localeCases',
            :key='site.slug',
            cols='12',
            md='6'
          )
            s-pages-cases-components-card-grid(
              :key='site.slug',
              :site='site',
              :custom-path='localePath(`/cases/${caseType(site.type)}/websites`)'
            )

        p.mt-8.mb-0.text-center
          v-hover(v-slot='{ hover }')
            v-btn.mx-auto.transition.transform(
              :block='$vuetify.breakpoint.xs',
              :to='localePath("/cases")',
              x-large,
              color='primary',
              :class='$vuetify.breakpoint.mdAndUp && hover ? "shadow-xl scale-125 -translate-y-1" : "shadow-sm"'
            ) {{ $t('all') }} {{ $t('pages.cases.title') }}
      //- /SECTION

      //- SECTION[epic=home] SKILLSET
      v-col(cols='12')
        s-section-heading-anchor(
          :title='$t("pages.index.sections.skillset.title")',
          anchor='skillset'
        )

        lazy-s-skill-set(:set='skills.data')
      //- /SECTION

      //- SECTION[epic=home] CERTIFICATES
      v-col(cols='12')
        s-section-heading-anchor(
          :title='$t("pages.index.sections.certificates.title")',
          anchor='certificates'
        )
        p {{ $t('pages.index.sections.certificates.message') }}

        v-row.mx-0
          v-col.d-flex.flex-column(v-for='cert in certList', :key='cert.num')
            v-card.cert.hidden.grow.d-grid.place-items-center(
              v-box-shadow:el-10,
              transition='slide-y-reverse-transition'
            )
              img(
                lazy-src='https://fakeimg.pl/400x280/e9ecf2/1e1e24?text=IMG',
                loading='lazy',
                :src='`/src/certificates/${cert.num}.jpg`',
                alt='',
                contain
              )

            v-card-text.pb-0.text-center {{ certLocale(cert.caption) }}
            v-card-subtitle.text-center {{ formatDate(cert.date) }}

        p.mt-8.mb-0.text-center
          v-hover(v-slot='{ hover }')
            v-btn.mx-auto.transition.transform(
              :block='$vuetify.breakpoint.xs',
              :to='localePath("/certificates")',
              x-large,
              color='primary',
              :class='$vuetify.breakpoint.mdAndUp && hover ? "shadow-xl scale-125 -translate-y-1" : "shadow-sm"'
            ) {{ $t('more.base') }} {{ $t('pages.index.sections.certificates.title') }}
      //- /SECTION

      v-img.confetti-horizontal.not-pointer.mx-auto(
        src='/src/confetti-horizontal.svg',
        alt=''
      )
</template>

<script>
import {
  mdiOpenInNew,
  mdiPalette,
  mdiCodeBracesBox,
  mdiChartAreaspline,
  mdiDotsHorizontal,
  mdiArrowExpand,
} from '@mdi/js'
import { appMeta as done } from '~/config/app'

export default {
  name: 'PageIndex',
  async asyncData({ $content, params, app }) {
    const getTimeline = await $content(
      `${app.i18n.locale}/timeline`,
      params.slug
    )
      .sortBy('date', 'desc')
      .limit(4)
      .fetch()

    const annualReport = await $content(`${app.i18n.locale}/annual-report`)
      .only(['chartOptions', 'chartSeries'])
      .fetch()

    const skills = await $content('skills/skillset').fetch()

    const getCertificates = await $content('certificates', params.slug).fetch()

    const desSiteLocale = await $content(
      `${app.i18n.locale}/cases/design/websites`,
      params.slug
    )
      .where({ type: { $in: ['des-site'] } })
      .only(['type', 'slug', 'ux', 'img', 'title', 'created'])
      .limit(1)
      .sortBy('created', 'desc')
      .fetch()

    const devSiteLocale = await $content(
      `${app.i18n.locale}/cases/dev/websites`,
      params.slug
    )
      .where({ type: { $in: ['dev-site'] } })
      .only(['type', 'slug', 'ux', 'img', 'title', 'created'])
      .limit(1)
      .sortBy('created', 'desc')
      .fetch()

    return {
      getTimeline,
      annualReport,
      skills,
      getCertificates,
      desSiteLocale,
      devSiteLocale,
    }
  },
  data() {
    return {
      mdiOpenInNew,
      mdiPalette,
      mdiCodeBracesBox,
      mdiChartAreaspline,
      mdiDotsHorizontal,
      mdiArrowExpand,
      doneProjects: done.author.projects,
      doneWorks: done.author.works,
      counters: {
        data: [
          {
            title: 'Designing Skills',
            val: '75',
            icon: mdiPalette,
            color_one: '#5b62e0',
            color_two: '#5731a1',
          },
          {
            title: 'Programming Skills',
            val: '68',
            icon: mdiCodeBracesBox,
            color_one: 'var(--orange)',
            color_two: 'var(--pink)',
          },
          {
            title: 'Marketing Skills',
            val: '45',
            icon: mdiChartAreaspline,
            color_one: 'var(--green)',
            color_two: 'var(--teal)',
          },
        ],
      },
      years: 5,
    }
  },
  head() {
    return {
      titleTemplate: '',
      title: this.$t('app.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('app.meta.description'),
        },
      ],
    }
  },
  computed: {
    timelineLocale() {
      return this.getTimeline ? this.getTimeline : []
    },
    certList() {
      if (this.getCertificates) {
        const compareNumbers = (a, b) => {
          return Date.parse(b.date) - Date.parse(a.date)
        }

        return this.getCertificates
          .map((e) => e.figures)
          .flat()
          .sort(compareNumbers)
          .slice(0, 3)
      } else {
        return []
      }
    },
    localeCases() {
      return this.desSiteLocale || this.devSiteLocale
        ? this.desSiteLocale.concat(this.devSiteLocale)
        : []
    },
    localeWords() {
      if (this.$i18n.locale === 'ru') {
        return ['год', 'года', 'лет']
      } else if (this.$i18n.locale === 'en') {
        return ['year', 'years', 'years']
      }

      return []
    },
  },
  methods: {
    storyLocale() {
      if (this.$i18n.locale === 'ru') {
        return {
          title: 'Обо мне',
          path: 'https://geekbrains.ru/posts/single_developer_story',
        }
      } else if (this.$i18n.locale === 'en') {
        return {
          title: 'My story',
          path: 'https://andrejsharapov.medium.com/what-if-you-are-a-solo-developer-7c6cee66bf48',
        }
      }
    },
    caseType(type) {
      if (type === 'des-site') {
        return 'design'
      } else if (type === 'dev-site') {
        return 'dev'
      }
    },
    declensions(number, words) {
      return (
        this.years +
        ' ' +
        words[
          number % 100 > 4 && number % 100 < 20
            ? 2
            : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
        ]
      )
    },
    certLocale(item) {
      if (this.$i18n.locale === 'ru') {
        return item.ru
      } else if (this.$i18n.locale === 'en') {
        return item.en
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>

<style lang="scss">
.page {
  &__index {
    --stop-color-one: var(--primary);
    --stop-color-two: var(--accent);
    --gradient-default: linear-gradient(
      45deg,
      var(--stop-color-one, var(--primary)) 50%,
      var(--stop-color-two, var(--accent)) 100%
    );

    .personal-info {
      @media (min-width: 1904px) {
        grid-template-columns: repeat(4, minmax(auto, max-content));
      }
    }
  }
}

.transition {
  transition-property: all;
  transition-duration: var(--base-time);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transform {
  --scale-x: 1;
  --scale-y: 1;
  --translate-x: 0;
  --translate-y: 0;

  transform: translateX(var(--translate-x)) translateY(var(--translate-y))
    scaleX(var(--scale-x)) scaleY(var(--scale-y));
}

.scale-125 {
  --scale-x: 1.25;
  --scale-y: 1.25;
}

// stylelint-disable selector-class-pattern
.-translate-y-1 {
  --translate-y: -0.25rem;
}

.section-timeline .ps {
  height: 435px;
}

@media (max-width: 576px) {
  .v-timeline {
    &::before {
      left: 50% !important;
      transform: translateX(0.125rem);
    }
  }

  .v-timeline-item {
    &__body {
      max-width: 100% !important;
    }

    &__divider {
      display: none !important;
    }
  }
}
</style>
