<template lang="pug">
v-card.dialog-card.rounded.overflow-hidden(v-box-shadow='6')
  v-card-title {{ content.title }}
  v-card-subtitle {{ formatDate(content.created) }}
  v-dialog(
    fullscreen,
    v-model='dialog',
    hide-overlay,
    transition='dialog-bottom-transition'
  )
    template(#activator='{ on: showContent }')
      //- v-on='showContent'
      nuxt-link(:to='localePath(`/cases/design/quiz/${content.slug}`)')
        v-img.cursor-pointer(:src='content.img.src', alt='', contain)

    v-card
      v-toolbar(flat, tile)
        v-btn(icon, @click='dialog = false')
          v-icon {{ mdiClose }}
        v-toolbar-title {{ content.title }}
        template(v-for='(link, name, value) of content.preview.to')
          v-btn.ml-6(
            v-if='link !== null',
            :key='value',
            icon,
            :href='link',
            target='_blank'
          )
            v-icon {{ `$${name}Outline` }}
        v-spacer
        .d-grid.grid-cols-2.align-center.gap-3
          v-btn(
            :disabled='step === 1',
            text,
            @click='step--',
            @keyup.left='step--',
            @keyup.right='step++'
          ) {{ $tc("events.prev", 0) }}
          v-btn(
            :disabled='step === content.section.length',
            depressed,
            color='primary',
            @click='step++',
            @keyup.left='step--',
            @keyup.right='step++'
          ) {{ $tc("events.next", 0) }}

      v-window(v-model='step', vertical)
        v-window-item(
          v-for='(i, index) of content.section',
          :key='i',
          :value='index + 1'
        )
          .pa-4
            v-img(
              :src='`/src/nuxt-app/quiz/${content.slug}/${i}.jpg`',
              alt='',
              max-height='calc(100vh - 100px)',
              contain
            )
</template>

<script>
import { mdiClose } from '@mdi/js'

export default {
  name: 'DialogCard',
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      dialog: false,
      mdiClose,
      step: 1,
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
