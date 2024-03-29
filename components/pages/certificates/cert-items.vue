<template lang="pug">
.cert-items
  v-card(v-for='cert in items', :key='cert.slug', flat, color='transparent')
    v-card-title.text-uppercase.anchor-link.font-weight-bold.primary--text(
      :id='cert.slug'
    ) {{ titleLocale(cert) }}
      //- LINK
      nuxt-link.ml-2(:to='$nuxt.$route.path + "#" + cert.slug') #
    v-row.mx-0
      v-col.d-flex.flex-column(
        v-for='(f, index) in cert.figures.slice(limitStart, limitEnd)',
        :key='index',
        cols='12',
        sm='6',
        :md='[4].includes(cert.figures.length) ? "3" : "4"'
      )
        v-card.cert.hidden.grow.d-grid.place-items-center(
          v-box-shadow='6',
          transition='slide-y-reverse-transition'
        )
          pre {{ cert.school }}
          v-btn.cert-open.d-none.d-md-flex.justify-center.align-center.rounded-lg.transition-fast-in-fast-out(
            v-if='f.school === "GB"',
            icon,
            large,
            exact,
            :href='`https://gb.ru/certificates/${f.num}.${$i18n.locale}`',
            target='_blank',
            rel='noopener noreferrer'
          )
            v-icon(color='white') {{ mdiArrowExpand }}

          img(
            lazy-src='https://fakeimg.pl/400x280/e9ecf2/1e1e24?text=IMG',
            loading='lazy',
            :src='`/src/certificates/${f.num}.jpg`',
            alt='',
            contain
          )

        v-card-text.pb-0.text-center {{ certLocale(f.caption) }}
        v-card-subtitle.text-center {{ formatDate(f.date) }}
</template>

<script>
import { mdiArrowExpand } from '@mdi/js'

export default {
  name: 'CertItems',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    limitStart: {
      type: String,
      default: undefined,
    },
    limitEnd: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      mdiArrowExpand,
    }
  },
  methods: {
    titleLocale(cert) {
      if (this.$i18n.locale === 'ru') {
        return cert.title
      } else if (this.$i18n.locale === 'en') {
        return cert.slug
      }
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
.cert {
  position: relative;
  max-width: 100%;

  &-open {
    position: absolute;
    z-index: 1;
    top: 1rem;
    right: 1rem;
    margin-left: auto;
    transform: translate(-0.75rem, 0.75rem) scale(0.9);
    transition: var(--base-time);
    opacity: 0;
    background-color: var(--stop-color-one);
  }

  &:hover {
    .cert-open {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
  }
}
</style>
