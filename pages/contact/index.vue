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
        s-social-icons.d-flex.flex-wrap.justify-center

      v-col(cols='12')
        p.text-center.mt-4
          | {{ $t("pages.contact.message") }}
          v-tooltip(v-if='$vuetify.breakpoint.smAndUp', bottom)
            template(#activator='{ on: help }')
              v-icon.cursor-help(right, size='18', color='accent', v-on='help') {{ mdiHelpCircleOutline }}
            span {{ $t("pages.contact.help") }}
      v-col(cols='12')
        s-pages-contact-info.mb-4(:info='info.contacts')
        p.text-center.text-sm-right.mt-4 {{ $t("author.region") }}
</template>

<script>
import { mdiHelpCircleOutline } from '@mdi/js'
import { contact } from '~/lib/page-meta'

export default {
  name: 'ContactIndex',
  async asyncData({ $content }) {
    const info = await $content('contact').only(['contacts']).fetch()

    return {
      info,
    }
  },
  data() {
    return {
      page: contact(this),
      mdiHelpCircleOutline,
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
.page {
  &__contact {
    --stop-color-one: #1c2bc6;
    --stop-color-two: var(--v-success-lighten3);
    --size: 4rem;

    .social-icons {
      &__btn {
        margin: 1rem !important;
        padding: calc(var(--size) / 2);
        transition: transform var(--base-time) cubic-bezier(0, 0.6, 0.35, 1.21),
          opacity 0.2s ease;
        opacity: 0.8;
        color: var(--stop-color-one);
        caret-color: var(--stop-color-one);
        will-change: transform, opacity;

        .v-icon {
          &__component {
            transform: scale(1.8);

            path {
              /* stylelint-disable function-url-quotes */
              fill: url(#gradientIcon);
            }
          }
        }

        &::after {
          content: attr(data-title);
          visibility: hidden;
          position: absolute;
          top: 100%;
          left: 50%;
          padding: inherit;
          transform: translateX(-50%);
          transition: transform var(--base-time)
              cubic-bezier(0, 0.31, 0.22, 1.25),
            opacity 0.2s ease;
          opacity: 0;
          will-change: transform, opacity;
          color: var(--stop-color-one);
          font-size: 1.15rem;
          text-transform: none;
          caret-color: var(--stop-color-one);
        }

        &:hover {
          transform: translateY(-0.75rem);
          opacity: 1;

          &::after {
            visibility: visible;
            transform: translate(-50%, -1.85rem);
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
