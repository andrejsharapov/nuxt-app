<template lang="pug">
.code-example(transition='slide-y-reverse-transition')
  .mb-6.card-view(v-for='(item, index) of items', :key='index')
    v-row(no-gutters)
      v-col(cols='12', md='4')
        v-card.rounded-lg.hidden.mb-md-4(
          :flat='$vuetify.breakpoint.smAndDown',
          :class='{ "card-view__image": $vuetify.breakpoint.mdAndUp }'
        )
          v-img(
            lazy-src='https://fakeimg.pl/300/e9ecf2/1e1e24?text=IMG',
            :src='"https://assets.codepen.io/2727382/internal/screenshots/pens/" + item.src + ".default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1570964826&width=960"',
            alt='',
            aspect-ratio='1.7'
          )
            template(#placeholder)
              v-row.fill-height.ma-0(align='center', justify='center')
                v-progress-circular(indeterminate, color='grey lighten-5')

      v-col(cols='12', md='8')
        v-card.mt-sm-4.ml-0.ml-lg-4(flat, color='transparent')
          v-card-subtitle.py-0 {{ $t("date.default") }} &mdash;
            strong
              |
              | {{ formatDate(item.date) }}
          v-spacer
          v-card-title.pb-2 {{ item.title }}
          v-card-text {{ localeDescription(item) }}
          v-card-text.py-0.not-pointer.d-flex.align-center
            span.mr-2 Code:
            template(
              v-for='tags in item.pen.filter((e) => e.title === "Code")'
            )
              v-chip-group
                v-chip(
                  v-for='(tag, index) in tags.list',
                  :key='index',
                  label,
                  outlined,
                  small
                ) {{ tag }}
          s-pages-coding-dialog-content(:item='item')
</template>

<script>
export default {
  name: 'CodeExample',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    localeDescription(item) {
      if (this.$i18n.locale === 'ru') {
        return item.descRu
      } else if (this.$i18n.locale === 'en') {
        return item.descEn
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>
