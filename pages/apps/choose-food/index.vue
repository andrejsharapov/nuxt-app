<script>
import {
  mdiMenu,
  mdiWeatherPartlyCloudy,
  mdiWeatherNightPartlyCloudy,
  mdiPlusBoxOutline,
  mdiMinusBoxOutline,
  mdiHelpRhombusOutline,
} from '@mdi/js'

export default {
  layout: 'apps',
  data: () => ({
    mdiMenu,
    mdiWeatherPartlyCloudy,
    mdiWeatherNightPartlyCloudy,
    mdiPlusBoxOutline,
    mdiMinusBoxOutline,
    mdiHelpRhombusOutline,
    wordIndex: -1,
    wordsList: [
      'KFC',
      'WOK',
      'Бургер Кинг',
      'Корчма',
      'Крошка Картошка',
      'Пицца',
      'Теремок',
      'Шоколадница',
      'Якитория',
    ],
    newItem: {
      value: null,
      place: 'Добавить ресторан',
      icon: mdiPlusBoxOutline,
    },
    btnDisabled: false,
    snackbarShow: false,
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
      this.$refs.setWord.classList.add('animate__zoomInDown')
      this.btnDisabled = true

      setTimeout(() => {
        this.$refs.setWord.classList.remove('animate__zoomInDown')
        this.btnDisabled = false
      }, 1000)
    },
    addItem() {
      if (this.newItem.value !== null || this.newItem.value !== '') {
        this.wordsList.push(this.newItem.value)
      }

      this.newItem.value = null
    },
    removeItem(el) {
      // console.log(el)
      this.wordsList.splice(this.wordsList.indexOf(el), 1)
    },
  },
}
</script>

<template lang="pug">
.page__apps__choose-food.fill-height.pa-4.overflow-hidden(
  :style='appBackground'
)
  .d-flex.justify-end
    //- ANCHOR menu
    v-menu(
      absolute,
      top,
      right,
      allow-overflow,
      :close-on-content-click='false'
    )
      template(#activator='{ on: showRestaurants }')
        v-btn.rounded(
          dark,
          small,
          :fab='!$vuetify.breakpoint.mdAndUp',
          min-height='40',
          color='deep-orange',
          v-on='showRestaurants'
        )
          v-icon(color='white', :left='$vuetify.breakpoint.mdAndUp') {{ mdiMenu }}
          span(v-if='$vuetify.breakpoint.mdAndUp') Рестораны

      v-card(dark)
        v-list-item.py-2
          v-list-item-action.cursor-pointer(@click='addItem')
            v-icon(color='deep-orange') {{ mdiPlusBoxOutline }}
          v-list-item-content.py-0
            v-text-field(
              v-model='newItem.value',
              dense,
              outlined,
              hide-details,
              :placeholder='newItem.place',
              @keyup.enter='addItem'
            )
        v-divider
        perfect-scrollbar(style='max-height: calc(100vh - 6rem)')
          v-list(dark, dense)
            template(v-for='(item, index) in wordsList')
              v-list-item(:key='item')
                v-list-item-action.cursor-pointer(@click='removeItem(item)')
                  v-icon(color='deep-orange') {{ mdiMinusBoxOutline }}
                v-list-item-content.py-0
                  v-list-item-title.font-weight-light {{ item }}
              v-divider(v-if='index < wordsList.length - 1', :key='index')

  //- ANCHOR message
  .d-grid.place-items-center.fill-height.text-center
    div
      .text-h4.text-md-h2.mb-6.text-uppercase.text-no-wrap.font-weight-bold.white--text 
        span#set-word(ref='setWord')
          | {{ wordIndex >= 0 ? `&laquo;${wordsList[wordIndex]}&raquo;` : "Что закажем?" }}
      v-btn.font-weight-bold(
        x-large,
        dark,
        :disabled='btnDisabled',
        color='deep-orange',
        @click='randomize'
      ) {{ $t("events.select") }}

  //- ANCHOR help
  v-btn.rounded(
    dark,
    fab,
    fixed,
    right,
    bottom,
    color='deep-orange',
    :class='{ "mb-16": $vuetify.breakpoint.smAndDown }',
    @click='snackbarShow = true'
  )
    v-icon(large) {{ mdiHelpRhombusOutline }}

  v-snackbar(v-model='snackbarShow', vertical, :timeout='8000')
    v-card(color='transparent', flat)
      v-card-title.px-0.text-break-word Не можете договориться с друзьями или второй половинкой откуда заказать еду? Не беда!
      v-card-text.px-0.pb-0 Просто нажмите кнопку, чтобы отобразить случайный ресторан и тем самым решить ваш спор. Нажмите на кнопку "Рестораны", чтобы увидеть весь список ресторанов или изменить его.
      v-card-actions
        v-spacer
        v-btn(dark, text, @click='snackbarShow = false') Ясно
</template>

<style lang="sass">
@import 'https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap'

.page
  &__apps
    &__choose-food
      --animate-duration: 1s
      --animate-delay: 0
      --choose-food-fz: 'Delius Swash Caps', cursive

      font-family: var(--choose-food-fz)

      .v-alert *
        font-family: var(--choose-food-fz) !important

      #set-word
        display: block
        font-family: var(--choose-food-fz)
        animation-duration: var(--animate-duration)
        animation-delay: var(--animate-delay)

        &.animate__zoomInDown
          animation-name: zoomInDown

        &.animate__jello
          animation-name: jello

@keyframes zoomInDown
  from
    animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    opacity: 0
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px ,0)
  60%
    animation-timing-function: cubic-bezier(.175, .885, .32,1)
    opacity: 1
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0)

@keyframes jello
  0%,
  11.1%,
  to
    transform: translateZ(0)
  22.2%
    transform: skewX(-12.5deg) skewY(-12.5deg)
  33.3%
    transform: skewX(6.25deg) skewY(6.25deg)
  44.4%
    transform: skewX(-3.125deg) skewY(-3.125deg)
  55.5%
    transform: skewX(1.5625deg) skewY(1.5625deg)
  66.6%
    transform: skewX(-.78125deg) skewY(-.78125deg)
  77.7%
    transform: skewX(.390625deg) skewY(.390625deg)
  88.8%
    transform: skewX(-.1953125deg) skewY(-.1953125deg)
</style>
