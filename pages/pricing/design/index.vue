<template lang="pug">
.page__pricing-design-index
  s-history-back

  s-layout-components-back-image(:page='page')
    template(#back-image)
      s-back-waves-line-three(
        absolute,
        right='0',
        bottom='-7',
        left='0',
        :width='null',
        :height='null'
      )

  v-container
    v-row.mb-6
      //- SECTION PLUSES
      v-col(cols='12', sm='8')
        s-section-heading-anchor(
          :title='$t("pages.pricing.sections.why.heading")',
          anchor='why'
        )
        s-pages-cases-components-slug-components-section-sub-title(
          :title='$t("pages.pricing.sections.why.pluses.prepend.heading")'
        )
        v-list(color='transparent')
          v-list-item(
            v-for='(item, i) of $t("pages.pricing.design").pluses',
            :key='i'
          )
            v-list-item-icon(v-if='$vuetify.breakpoint.smAndUp')
              v-sheet.d-flex.align-center.justify-center.rounded.gradient-page(
                width='16',
                height='16',
                outlined
              )
            v-list-item-content
              v-list-item-title.text-wrap(v-html='item')

        s-pages-cases-components-slug-components-section-sub-title(
          :title='$t("pages.pricing.sections.why.pluses.append.heading")'
        )
        v-list(color='transparent')
          v-list-item(
            v-for='(item, i) of $t("pages.pricing.sections.why.pluses.append.list")',
            :key='i'
          )
            v-list-item-icon(v-if='$vuetify.breakpoint.smAndUp')
              v-sheet.d-flex.align-center.justify-center.rounded.gradient-page(
                width='16',
                height='16',
                outlined
              )
            v-list-item-content
              v-list-item-title.text-wrap(v-html='item')

      v-col.z-index-2(cols='12', sm='4')
        .mt-sm-n15
          s-fish-pages-pricing.mt-md-n15(width='270', :height='null')
      //- /SECTION

      //- SECTION COOPERATION
      v-col(cols='12')
        s-section-heading-anchor(
          :title='$t("pages.pricing.sections.cooperation.heading")',
          anchor='cooperation'
        )
        v-row.my-0
          v-col(cols='12', md='6')
            h3.mb-3.text-h4.font-weight-medium.text-uppercase {{ $t("pages.pricing.sections.cooperation.variants[0].heading") }}
            p {{ $t("pages.pricing.sections.cooperation.variants[0].message") }}

          v-col(cols='12', md='6')
            h3.mb-3.text-h4.font-weight-medium.text-uppercase {{ $t("pages.pricing.sections.cooperation.variants[1].heading") }}
            p
              | {{ $t("pages.pricing.sections.cooperation.variants[1].message") }}
              v-tooltip(bottom, max-width='500')
                template(#activator='{ on: comment }')
                  v-icon.cursor-help(
                    right,
                    size='18',
                    color='indigo lighten-2',
                    v-on='comment'
                  ) {{ mdiHelpCircleOutline }}
                span {{ $t("pages.pricing.sections.cooperation.variants[1].comment") }}
      //- /SECTION

      //- SECTION DEADLINE
      v-col(cols='12')
        s-section-heading-anchor(
          :title='$t("pages.pricing.sections.deadline.heading")',
          anchor='deadline'
        )
        v-card.mb-4(
          flat,
          :color='$vuetify.theme.dark ? "indigo lighten-2" : "indigo lighten-5"'
        )
          .d-flex.flex-no-wrap.justify-space-between
            v-avatar.d-none.d-sm-block.ma-4.rounded(size='125', tile)
              pricing-calculate
            div
              v-card-title.text-break-word.font-weight-bold {{ $t("pages.pricing.sections.deadline.calculate.question") }}
              v-card-text.text-body-1 {{ $t("pages.pricing.sections.deadline.calculate.message") }}

        p {{ $t("pages.pricing.sections.deadline.message") }}
      //- /SECTION

      //- SECTION COST
      v-col(cols='12')
        s-section-heading-anchor(
          :title='$t("pages.pricing.sections.cost.heading")',
          anchor='cost'
        )
        v-card(
          flat,
          :color='$vuetify.theme.dark ? "indigo lighten-2" : "indigo lighten-5"'
        )
          .d-flex.flex-no-wrap.justify-space-between
            v-avatar.d-none.d-sm-block.ma-4.rounded(size='125', tile)
              pricing-calculate
            div
              v-card-title.text-break-word.font-weight-bold {{ $t("pages.pricing.sections.cost.calculate.question") }}
              v-card-text.text-body-1 {{ $t("pages.pricing.sections.cost.calculate.message") }}
      //- /SECTION

      //- SECTION SERVICES
      v-col(cols='12')
        s-section-heading-anchor(
          :title='$t("pages.pricing.sections.services.heading")',
          anchor=''
        )
        lazy-s-pages-pricing-services-expansion-panels(
          v-if='$t("pages.pricing.design").list.length',
          :headers='$t("pages.pricing.design").headers',
          :items='$t("pages.pricing.design").list'
        )
        lazy-s-works-not-found(v-else, message='...')
      //- /SECTION

  v-parallax(
    dark,
    src='https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    style='height: 21.875rem'
  )
    v-container
      v-row
        v-col.text-center.d-flex.flex-column.justify-center.align-center.white--text(
          cols='12'
        )
          .bg-blur.pa-8.rounded(v-box-shadow='12')
            h3.mb-12.text-h5.text-sm-h4.font-weight-medium.text-uppercase {{ $t("pages.pricing.sections.cta.question") }}
            p.text-h6.text-uppercase
              v-hover(v-slot='{ hover }')
                v-btn.transition.transform(
                  x-large,
                  :href='`mailto:an.sharapov90@gmail.com?subject=`',
                  :block='$vuetify.breakpoint.xs',
                  :class='hover ? "shadow-xl scale-125 -translate-y-1" : "shadow-md"',
                  color='primary'
                )
                  v-icon(left, size='32') {{ mdiEmailArrowRight }}
                  | {{ $t("pages.pricing.sections.cta.action") }}
</template>

<script>
import { mdiShopping, mdiHelpCircleOutline, mdiEmailArrowRight } from '@mdi/js'
import { pricing } from '~/lib/page-meta'
import pricingCalculate from '~/assets/images/pricing-calculate.svg?inline'

export default {
  name: 'PricingDesignIndex',
  components: {
    pricingCalculate,
  },
  data() {
    return {
      page: pricing(this),
      mdiShopping,
      mdiHelpCircleOutline,
      mdiEmailArrowRight,
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

<style scoped>
.page__pricing-design-index {
  --stop-color-one: #5b62e0;
  --stop-color-two: #5731a1;
}

.transition {
  transition-property: all;
  transition-duration: var(--base-time);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transform {
  --scale-x: 1;
  --scale-y: 1;
  --translate-x: 0;
  --translate-y: 0;

  transform: translateX(var(--translate-x)) translateY(var(--translate-y))
    scaleX(var(--scale-x)) scaleY(var(--scale-y));
}

.scale-125 {
  --scale-x: 1.25;
  --scale-y: 1.25;
}

.-translate-y-1 {
  --translate-y: -0.25rem;
}

.gradient-page {
  background-image: linear-gradient(
    45deg,
    var(--stop-color-one),
    var(--stop-color-two)
  );
}

.v-parallax::before {
  content: '';
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background-color: var(--black);
}

.v-parallax__image-container {
  top: -90px !important;
}

.v-parallax__image-container img {
  object-fit: cover;
}

.v-parallax__content .bg-blur {
  background-color: #f8f9fc4d;
  backdrop-filter: saturate(180%) blur(0.35rem);
}
</style>
