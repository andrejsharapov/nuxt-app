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
      v-col.d-none.d-sm-block(cols='12', sm='4')
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
        .mt-6
          lazy-s-social-icons

        //- btn story
        v-btn.mt-3.mx-auto.fill-width.uppercase(
          block,
          text,
          plain,
          :href='storyLocale().path',
          color='grey lighten-1',
          rel='noopener noreferrer',
          target='_blank'
        ) {{ storyLocale().title }}
          v-icon(right) {{ mdiOpenInNew }}

      //- ANCHOR 2/2
      v-col(cols='12', sm='8')
        //- hello!
        h1.mb-3.text-h4.text-md-h3.text-center.text-md-left.font-weight-medium {{ $t("author.name") }}
        h3.mb-8.text-h5.text-md-h2.text-center.text-md-left.font-weight-bold.text-gradient(
          style='background-image: linear-gradient(180deg, var(--info), var(--primary))'
        )
          strong {{ this.$t("author.position[0]") }},
          br
          strong {{ this.$t("author.position[1]") }}

        p {{ $t("pages.index.about", { years: 4 }) }}

        //- activity
        p.mb-0 {{ $t("pages.index.activity.prepend") }}:
        v-row.d-none.d-sm-flex.mb-4
          v-col(
            v-for='(card, index) in $t("pages.index.activity.list")',
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
                                span.text-h4.font-weight-bold.white--text {{ index + 1 }}
                  v-list-item-content.pb-0
                    v-list-item-title.text-wrap {{ card.message }}
      //- /SECTION

      //- SECTION[epic=home] COUNTERS
      //- /SECTION

      //- SECTION[epic=home] ACHIVEMENTS
      //- /SECTION

      //- SECTION[epic=home] WORKS
      //- /SECTION

      //- SECTION[epic=home] SKILLSET
      //- /SECTION

      //- SECTION[epic=home] CERTIFICATES
      //- /SECTION
      v-img.confetty-horizontal.not-pointer.mx-auto(
        v-if='$vuetify.breakpoint.smAndUp',
        src='/src/confetti-horizontal.svg',
        alt=''
      )
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

export default {
  data() {
    return {
      mdiOpenInNew,
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
  },
}
</script>

<style lang="scss">
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: var(--base-time);
}
</style>
