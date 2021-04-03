<template lang="pug">
.cert-items(transition='scroll-y-reverse-transition')
  v-card(v-for='cert in items', :key='cert.slug', flat, color='transparent')
    v-card-title.text-uppercase.anchor-link.font-weight-bold.primary--text(
      :id='cert.slug'
    ) {{ titleLocale(cert) }}
      nuxt-link.ml-2(:to='$nuxt.$route.path + "#" + cert.slug') #
    v-row
      v-col(
        v-for='(f, index) in cert.figures',
        :key='index',
        cols='12',
        :sm='[2].includes(cert.figures.length) ? "6" : [4].includes(cert.figures.length) ? "3" : "4"'
      )
        v-card.cert.hidden.shadow-sm
          v-btn.cert-open.d-none.d-md-flex.justify-center.align-center.rounded-lg.transition-fast-in-fast-out(
            icon,
            large,
            exact,
            :href='`https://geekbrains.ru/certificates/${f.num}.${$i18n.locale}`',
            target='_blank',
            rel='noopener noreferrer'
          )
            v-icon(color='white') {{ mdiArrowExpand }}
          v-img.fill-height(
            :lazy-src='`https://fakeimg.pl/400x280/e9ecf2/1e1e24?text=IMG`',
            :src='`/src/certificates${f.img.src}`',
            alt='',
            max-width='100%',
            contain,
            :aspect-ratio='16 / 11.25'
          )
            template(#placeholder)
              v-row.fill-height.ma-0(align='center', justify='center')
                v-progress-circular(indeterminate, color='grey lighten-5')

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
  &-open {
    position: absolute;
    z-index: 1;
    top: 1rem;
    right: 1rem;
    margin-left: auto;
    background-color: var(--stop-color-one);
    opacity: 0;
    transform: translate(-0.75rem, 0.75rem) scale(0.9);
    transition: var(--base-time);
  }

  &:hover {
    .cert-open {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
  }
}
</style>
