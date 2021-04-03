<template lang="pug">
.page__contact
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line(
        absolute,
        right='0',
        bottom='-7',
        left='0',
        :width='null',
        :height='null'
      )

  v-container
    v-row
      v-col(cols='12')
        s-social-icons

      v-col(cols='12')
        p.text-center.mt-4 {{ $t("pages.contact.message") }}
      v-col(cols='12')
        s-page-contact-info.mb-4(:info='info.contacts')
        p.text-center.text-sm-right.mt-4 {{ $t("author.region") }}
</template>

<script>
import { contact } from '~/lib/page-meta'

export default {
  async asyncData({ $content }) {
    const info = await $content('contact').only(['contacts']).fetch()

    return {
      info,
    }
  },
  data() {
    return {
      page: contact(this),
    }
  },
  head() {
    return {
      title: this.page.title,
      titleTemplate: `%s · ${this.$t('author.name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.page__contact {
  --stop-color-one: #1c2bc6;
  --stop-color-two: var(--v-success-lighten3);
  --size: 4rem;

  .social-icons {
    &__btn {
      margin: 1rem !important;
      padding: calc(var(--size) / 2);
      color: var(--stop-color-one);
      caret-color: var(--stop-color-one);
      opacity: 0.8;
      transition: transform var(--base-time) cubic-bezier(0, 0.6, 0.35, 1.21),
        opacity 0.2s ease;
      will-change: transform, opacity;

      .v-icon {
        &__component {
          transform: scale(1.8);

          path {
            fill: url(#gradientIcon);
          }
        }
      }

      &::after {
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        padding: inherit;
        content: attr(data-title);
        text-transform: none;
        font-size: 1.15rem;
        color: var(--stop-color-one);
        caret-color: var(--stop-color-one);
        opacity: 0;
        visibility: hidden;
        will-change: transform, opacity;
        transition: transform var(--base-time) cubic-bezier(0, 0.31, 0.22, 1.25),
          opacity 0.2s ease;
      }

      &:hover {
        opacity: 1;
        transform: translateY(-0.75rem);

        &::after {
          opacity: 1;
          transform: translate(-50%, -1.85rem);
          visibility: visible;
        }
      }
    }
  }
}
</style>
