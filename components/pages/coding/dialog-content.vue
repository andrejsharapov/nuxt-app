<template lang="pug">
.coding-card-dialog
  v-dialog(
    v-model='dialog',
    fullscreen,
    hide-overlay,
    transition='dialog-bottom-transition'
  )
    template(#activator='{ on: info }')
      .my-3.my-sm-0
        v-btn(
          :text='$vuetify.breakpoint.smAndUp',
          :large='$vuetify.breakpoint.xs',
          :block='$vuetify.breakpoint.xs',
          color='primary',
          v-on='info'
        ) {{ $t("more.details") }}
          v-icon(right, small) {{ mdiPageNextOutline }}

    v-card(tile)
      v-toolbar(flat, dark, color='primary')
        v-toolbar-title {{ item.title }}
        v-spacer

        v-btn(icon, @click.stop='$vuetify.theme.dark = !$vuetify.theme.dark') 
          v-icon {{ $vuetify.theme.dark ? mdiWhiteBalanceSunny : mdiWeatherNight }}

        v-btn(icon, @click='dialog = false') 
          v-icon $mdiClose

      v-card(flat)
        v-card-title {{ localeDescription(item.description) }}

        v-row(no-gutters)
          v-col(cols='12', md='7')
            v-card-text
              v-card.shadow-xl(
                style='overflow: auto; min-height: 400px; padding-bottom: 1em; resize: vertical; cursor: row-resize'
              )
                .codepen(
                  :data-slug-hash='item.src',
                  :data-pen-title='item.view.title',
                  :data-default-tab='item.view.tabs',
                  :data-theme-id='$vuetify.theme.dark ? "dark" : "light"',
                  data-user='andrejsharapov'
                )
                script(
                  async,
                  src='https://cpwebassets.codepen.io/assets/embed/ei.js'
                )

          v-col(cols='12', md='5')
            //- CaseSectionSubTitle.px-4(:title='$t("cases.banners.title")')

            v-card-text(v-if='item.alert.message')
              v-alert.mb-0(
                :type='item.alert.type',
                :icon='item.alert.icon ? item.alert.icon : undefined',
                text
              ) {{ item.alert.message }}

            v-card-text
              v-row(no-gutters)
                v-col(cols='12')
                  v-tabs(
                    v-model='tabs',
                    dark,
                    grow,
                    background-color='primary'
                  )
                    v-tab(v-for='item in item.pen', :key='item.title') {{ item.title }}
                  v-tabs-items(
                    v-model='tabs',
                    transition='scroll-y-reverse-transition'
                  )
                    v-tab-item(v-for='item in item.pen', :key='item.title')
                      v-card(flat)
                        v-list-item(
                          v-for='(tag, index) in item.list',
                          :key='index',
                          :href='item.title === "Tags" ? "https://developer.mozilla.org/ru/search?q=" + tag : undefined',
                          target='_blank',
                          rel='noopener noreferrer'
                        )
                          | {{ tag }}
                          v-icon(
                            right,
                            small,
                            :class='item.title === "Tags" ? "d-block" : "d-none"'
                          ) {{ mdiOpenInNew }}
</template>

<script>
import {
  mdiOpenInNew,
  mdiPageNextOutline,
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
} from '@mdi/js'
export default {
  name: 'CodingCardModal',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      dialog: false,
      tabs: false,
      mdiOpenInNew,
      mdiPageNextOutline,
      mdiWhiteBalanceSunny,
      mdiWeatherNight,
    }
  },
  methods: {
    localeDescription(item) {
      if (this.$i18n.locale === 'ru') {
        return item.ru
      } else if (this.$i18n.locale === 'en') {
        return item.en
      }
    },
  },
}
</script>

<style>
.cp_embed_wrapper {
  height: 100%;
}

.cp_embed_iframe {
  height: 100%;
  min-height: 400px;
}
</style>
