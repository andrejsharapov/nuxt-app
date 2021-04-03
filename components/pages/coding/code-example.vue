<template lang="pug">
.code-example(transition='slide-y-reverse-transition')
  .mb-6.coding-card(v-for='(item, index) of items', :key='index')
    v-row(no-gutters)
      v-col(cols='12', md='4')
        v-card.rounded-lg.hidden.mb-md-4(
          :flat='$vuetify.breakpoint.smAndDown',
          :class='{ "coding-card__image": $vuetify.breakpoint.mdAndUp }'
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
          v-card-subtitle.py-0 {{ $t("app.date.default") }} &mdash;
            strong
              |
              | {{ formatDate(item.date) }}
          v-spacer
          v-card-title {{ item.title }}
          v-card-text.pb-0(v-if='item.description') {{ localeDescription(item.description) }}
          v-card-text.pb-0.not-pointer.d-flex.align-center
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
          s-page-coding-dialog-content(:item='item')
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
$card: coding-card;

.#{$card} {
  &__image {
    transform: perspective(800px) rotateY(25deg) scale(0.8) rotateX(10deg);
    filter: blur(2px);
    opacity: 0.5;
    transition: all var(--base-time) cubic-bezier(0.25, 0.1, 0, 2.05);
  }

  &:hover {
    .#{$card} {
      &__image {
        transform: perspective(800px) rotateY(-15deg) translateY(-50px)
          rotateX(10deg) scale(1);
        filter: blur(0);
        opacity: 1;
        box-shadow: var(--shadow-xl);

        &:hover {
          transform: none;
        }
      }
    }
  }
}
</style>
