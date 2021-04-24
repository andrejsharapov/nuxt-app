<template lang="pug">
mixin sheet(color, saturation, size)
  v-sheet.rounded-circle.d-flex.justify-center.align-center(
    color=color + " " + saturation,
    width=size,
    height=size
  )
    if block
      block

.page__index
  v-container
    v-row
      //- SECTION[epic=home] ABOUT
      //- ANCHOR 1/2
      v-col.d-none.d-md-block(cols='12', md='4')
        //- author image
        v-img.shadow-xl.rounded-lg(
          lazy-src='https://fakeimg.pl/300/e9ecf2/1e1e24?text=AUTHOR',
          src='/src/author/unicorn.jpg',
          :alt='$t("author.name")'
        )
          template(#placeholder)
            v-row.fill-height.ma-0(align='center', justify='center')
              v-progress-circular(indeterminate, color='grey lighten-5')

        //- icons
        v-hover(#default='{ hover }')
          .mt-6.d-none.d-lg-block
            lazy-s-social-icons(
              plain,
              :class-color='hover ? "grey--text text--darken-2" : "grey--text text--lighten-1"'
            )

        //- btn story
        v-hover(#default='{ hover }')
          v-btn.mt-3.mx-auto.fill-width.uppercase(
            block,
            text,
            plain,
            :href='storyLocale().path',
            :color='hover ? "grey darken-2" : "grey lighten-1"',
            rel='noopener noreferrer',
            target='_blank'
          ) {{ storyLocale().title }}
            v-icon(right) {{ mdiOpenInNew }}

      //- ANCHOR 2/2
      v-col(cols='12', md='8')
        //- hello!
        h1.mb-3.text-h4.text-md-h3.text-center.text-md-left.font-weight-medium {{ $t("author.name") }}
        h3.mb-8.text-h5.text-md-h2.text-center.text-md-left.font-weight-bold.text-gradient(
          style='background-image: linear-gradient(180deg, var(--v-info-lighten2), var(--v-accent-darken1))'
        )
          strong {{ this.$t("author.position[0]") }},
          br
          strong {{ this.$t("author.position[1]") }}

        p {{ $t("pages.index.sections.about.message", { years: 4 }) }}

        //- activity
        p.mb-0 {{ $t("pages.index.sections.about.activity.prepend") }}:
        v-row.d-none.d-sm-flex.mb-4
          v-col(
            v-for='(card, index) in $t("pages.index.sections.about.activity.list")',
            :key='index',
            cols='12',
            sm='4'
          )
            v-hover(#default='{ hover }')
              v-sheet.mt-4.px-4.fill-height.rounded-lg.transition(
                :class='$vuetify.theme.dark ? "" : hover ? "white shadow-sm" : "transparent"'
              )
                v-list-item.flex-column.text-center
                  v-list-item-icon.mr-0.pt-4.align-self-center
                    span(v-if='$vuetify.theme.dark')
                      +sheet('blue', 'darken-4', 90)
                        +sheet('blue', 'darken-3', 80)
                          +sheet('blue', 'darken-2', 70)
                            v-avatar(
                              size='60',
                              color='blue darken-1',
                              outlined
                            )
                              v-avatar(
                                x-large,
                                fab,
                                color='blue',
                                elevation='0',
                                depressed
                              )
                                span.text-h4.font-weight-bold.white--text {{ index + 1 }}
                    span(v-else)
                      +sheet('blue', 'lighten-4', 90)
                        +sheet('blue', 'lighten-3', 80)
                          +sheet('blue', 'lighten-2', 70)
                            v-avatar(
                              size='60',
                              color='blue lighten-1',
                              outlined
                            )
                              v-avatar(
                                x-large,
                                fab,
                                color='blue',
                                elevation='0',
                                depressed
                              )
                                span.text-h5.font-weight-bold.white--text {{ `#${index + 1}` }}
                  v-list-item-content.pb-0
                    v-list-item-title.text-wrap {{ card.message }}
      //- /SECTION

      //- SECTION[epic=home] COUNTERS
      v-col(v-for='counter in counters.data', :key='counter.title')
        v-card.mb-4.px-4.white--text.rounded-lg.shadow-lg.not-pointer(
          :color='counter.color_one',
          :style='{ backgroundImage: "linear-gradient(45deg, " + counter.color_one + ", " + counter.color_two + ")" }'
        )
          .d-flex.align-center
            .ml-2
              v-sheet.rounded-lg.hidden.op-8(
                color='white',
                width='62',
                height='62'
              )
                .d-flex.justify-center.align-center.fill-height
                  v-icon(:color='counter.color_one', large) {{ counter.icon }}
            v-list-item-content
              v-card-title.text-h4.mb-1.pt-2.text-break-word {{ counter.val }}%
              v-card-subtitle.white--text.text-no-wrap.op-8 {{ counter.title }}
      //- /SECTION

      //- SECTION[epic=home] PRORESS
      //- ANCHOR 1/3
      v-col(cols='12', sm='8')
        s-section-heading-anchor.text-no-wrap(
          :title='$t("pages.index.sections.progress.title")',
          anchor='progress'
        )
        p {{ $t("pages.index.sections.progress.message", { projects: doneProjects, works: doneWorks }) }}

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
                      v-sheet.rounded.shadow-md
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
                  span {{ $t("more.events") }}

          v-col.text-center(v-if='$vuetify.breakpoint.xs', cols='12')
            v-btn.btn-shadow.mx-auto(
              :block='$vuetify.breakpoint.xs',
              :to='localePath("/timeline")',
              x-large,
              color='primary'
            ) {{ $t("more.events") }}

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
              :class='hover ? "shadow-xl scale-125 -translate-y-1" : "shadow-sm"'
            ) {{ $t("all") }} {{ $t("pages.cases.title") }}
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
        p {{ $t("pages.index.sections.certificates.message") }}

        lazy-s-pages-certificates-cert-items(
          :items='certList',
          limit-start='0',
          limit-end='3'
        )

        p.mt-8.mb-0.text-center
          v-hover(v-slot='{ hover }')
            v-btn.mx-auto.transition.transform(
              :block='$vuetify.breakpoint.xs',
              :to='localePath("/certificates")',
              x-large,
              color='primary',
              :class='hover ? "shadow-xl scale-125 -translate-y-1" : "shadow-sm"'
            ) {{ $t("more.base") }} {{ $t("pages.index.sections.certificates.title") }}
      //- /SECTION

      v-img.confetty-horizontal.not-pointer.mx-auto(
        v-if='$vuetify.breakpoint.smAndUp',
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
} from '@mdi/js'

import { appMeta as done } from '~/config/app'

export default {
  async asyncData({ $content, params, app }) {
    const getTimeline = await $content(
      `${app.i18n.locale}/pages/timeline`,
      params.slug
    )
      .sortBy('date', 'desc')
      .limit(4)
      .fetch()

    const annualReport = await $content(`${app.i18n.locale}/annual-report`)
      .only(['chartOptions', 'chartSeries'])
      .fetch()

    const skills = await $content('skills/skillset').fetch()

    const getCertificates = await $content('pages/certificates', params.slug)
      .where({ slug: 'web-design' })
      .fetch()

    const desSiteLocale = await $content(
      `${app.i18n.locale}/pages/cases/design/websites`,
      params.slug
    )
      .where({ type: { $in: ['des-site'] } })
      .only(['type', 'slug', 'ux', 'img', 'title', 'created'])
      .limit(1)
      .sortBy('created', 'desc')
      .fetch()

    const devSiteLocale = await $content(
      `${app.i18n.locale}/pages/cases/dev/websites`,
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
    }
  },
  head() {
    return {
      titleTemplate: '',
      title:
        this.$t('author.name') +
        ' · ' +
        this.$t('author.position[0]') +
        ', ' +
        this.$t('author.position[1]'),
    }
  },
  computed: {
    timelineLocale() {
      return this.getTimeline ? this.getTimeline : []
    },
    certList() {
      return this.getCertificates ? this.getCertificates : []
    },
    localeCases() {
      return this.desSiteLocale || this.devSiteLocale
        ? this.desSiteLocale.concat(this.devSiteLocale)
        : []
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
          path:
            'https://andrejsharapov.medium.com/what-if-you-are-a-solo-developer-7c6cee66bf48',
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
  },
}
</script>

<style lang="scss">
.page__index {
  --stop-color-one: var(--primary);
  --stop-color-two: var(--accent);
  --gradient-default: linear-gradient(
    45deg,
    var(--stop-color-one, var(--primary)) 50%,
    var(--stop-color-two, var(--accent)) 100%
  );
}

.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: var(--base-time);
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

.-translate-y-1 {
  --translate-y: -0.25rem;
}

.section-timeline .ps {
  height: 435px;
}

@media (max-width: 576px) {
  .v-timeline::before {
    left: 50% !important;
    transform: translateX(0.125rem);
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
