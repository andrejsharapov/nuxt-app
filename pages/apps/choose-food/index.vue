<script>
import {
  mdiMenu,
  mdiWeatherPartlyCloudy,
  mdiWeatherNightPartlyCloudy,
} from '@mdi/js'

export default {
  layout: 'apps',
  data: () => ({
    mdiMenu,
    mdiWeatherPartlyCloudy,
    mdiWeatherNightPartlyCloudy,
    wordIndex: -1,
    wordsList: [
      'Бургер и Ко',
      'КФС',
      'Блинчики',
      'Крошка Карточка',
      'Суши',
      'WOK и Ко',
      'Пицца',
      'Шоколадница',
    ],
  }),
  computed: {
    appBackground() {
      const bg = () => {
        if (this.$vuetify.breakpoint.smAndUp) {
          return {
            backgroundImage: 'url(/src/apps/choose-food/app-bg__md__dark.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }
        } else {
          return {
            backgroundImage: 'url(/src/apps/choose-food/app-bg__xs__dark.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }
        }
      }

      return bg()
    },
  },
  methods: {
    randomize() {
      this.wordIndex = Math.floor(Math.random() * this.wordsList.length)
    },
  },
}
</script>

<template lang="pug">
.page__apps__choose-food.fill-height.pa-4.overflow-hidden(
  :style='appBackground'
)
  v-system-bar.justify-space-between.py-1(
    app,
    window,
    color='info',
    height='48'
  )
    .text-caption.white--text Нажмите кнопку, чтобы вывести случайный ресторан.
    v-btn.mr-2.rounded(
      icon,
      @click='$vuetify.theme.dark = !$vuetify.theme.dark'
    )
      v-icon.mx-auto(color='white') {{ $vuetify.theme.dark ? mdiWeatherNightPartlyCloudy : mdiWeatherPartlyCloudy }}

  .d-flex.justify-end
    v-menu(absolute, top, right, allow-overflow)
      template(#activator='{ on: showRestaurants }')
        v-btn.rounded(
          :dark='$vuetify.theme.dark',
          depressed,
          :icon='!$vuetify.breakpoint.mdAndUp',
          :outlined='!$vuetify.breakpoint.mdAndUp',
          v-on='showRestaurants'
        )
          v-icon(:left='$vuetify.breakpoint.mdAndUp') {{ mdiMenu }}
          span(v-if='$vuetify.breakpoint.mdAndUp') show menu

      v-list(:dark='$vuetify.theme.dark', dense)
        template(v-for='(item, index) in wordsList')
          v-list-item(:key='item')
            v-list-item-title.font-weight-light {{ item }}
          v-divider(v-if='index < wordsList.length - 1', :key='index')

  .d-grid.place-items-center.fill-height.text-center
    div
      .text-h4.text-md-h2.mb-6.text-uppercase.font-weight-bold {{ wordIndex >= 0 ? `&laquo;${wordsList[wordIndex]}&raquo;` : "Что закажем?" }}
      v-btn.font-bold(x-large, @click='randomize', color='info') {{ $t("events.select") }}
</template>
